param(
  [int]$MaxWidth = 1920,
  [int]$Quality = 82
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms | Out-Null

function Get-JpegEncoder {
  $encoders = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
  foreach ($enc in $encoders) {
    if ($enc.MimeType -eq "image/jpeg") { return $enc }
  }
  throw "JPEG encoder not found."
}

function Save-Jpeg {
  param(
    [Parameter(Mandatory = $true)][System.Drawing.Image]$Image,
    [Parameter(Mandatory = $true)][string]$OutputPath,
    [Parameter(Mandatory = $true)][int]$Quality
  )

  $encoder = Get-JpegEncoder
  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $qualityParam = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
  $encoderParams.Param[0] = $qualityParam
  $Image.Save($OutputPath, $encoder, $encoderParams)
}

function Convert-ToOptimizedJpeg {
  param(
    [Parameter(Mandatory = $true)][string]$InputPath,
    [Parameter(Mandatory = $true)][string]$OutputPath,
    [Parameter(Mandatory = $true)][int]$MaxWidth,
    [Parameter(Mandatory = $true)][int]$Quality
  )

  if (!(Test-Path $InputPath)) { throw "Missing input: $InputPath" }

  $outputDir = Split-Path -Parent $OutputPath
  if (!(Test-Path $outputDir)) { New-Item -ItemType Directory -Force -Path $outputDir | Out-Null }

  $img = [System.Drawing.Image]::FromFile($InputPath)
  try {
    $srcW = $img.Width
    $srcH = $img.Height

    $scale = 1.0
    if ($srcW -gt $MaxWidth) { $scale = $MaxWidth / [double]$srcW }

    $dstW = [Math]::Max(1, [int][Math]::Round($srcW * $scale))
    $dstH = [Math]::Max(1, [int][Math]::Round($srcH * $scale))

    if ($dstW -eq $srcW -and $dstH -eq $srcH) {
      Save-Jpeg -Image $img -OutputPath $OutputPath -Quality $Quality
      return
    }

    $bmp = New-Object System.Drawing.Bitmap($dstW, $dstH)
    try {
      $bmp.SetResolution($img.HorizontalResolution, $img.VerticalResolution)
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      try {
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $dstW, $dstH)
      } finally {
        $g.Dispose()
      }

      Save-Jpeg -Image $bmp -OutputPath $OutputPath -Quality $Quality
    } finally {
      $bmp.Dispose()
    }
  } finally {
    $img.Dispose()
  }
}

$root = Split-Path -Parent $PSScriptRoot
$assets = Join-Path $root "src\\assets"
$outDir = Join-Path $assets "optimized"

$targets = @(
  @{ In = (Join-Path $assets "New Delhi.png"); Out = (Join-Path $outDir "new-delhi.jpg") },
  @{ In = (Join-Path $assets "crestline.png"); Out = (Join-Path $outDir "crestline.jpg") },
  @{ In = (Join-Path $assets "central-park-towers.png"); Out = (Join-Path $outDir "central-park-towers.jpg") },
  @{ In = (Join-Path $assets "urban-crest.png"); Out = (Join-Path $outDir "urban-crest.jpg") },
  @{ In = (Join-Path $assets "sohna road.png"); Out = (Join-Path $outDir "sohna-road.jpg") },
  @{ In = (Join-Path $assets "square residences.png"); Out = (Join-Path $outDir "square-residences.jpg") },
  @{ In = (Join-Path $assets "silver leaf enclave.png"); Out = (Join-Path $outDir "silver-leaf-enclave.jpg") }
)

foreach ($t in $targets) {
  Write-Host ("Optimizing: {0} -> {1}" -f $t.In, $t.Out)
  Convert-ToOptimizedJpeg -InputPath $t.In -OutputPath $t.Out -MaxWidth $MaxWidth -Quality $Quality
}

Write-Host "Done."
