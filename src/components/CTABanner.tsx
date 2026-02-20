import { useEffect, useMemo, useRef, useState } from "react";
import ctaBanner from "@/assets/cta-banner.png";

type CTABannerProps = {
  className?: string;
  variant?: "flow" | "overlay";
  onSizeChange?: (size: { width: number; height: number }) => void;
};

const CTABanner = ({ className, variant = "flow", onSizeChange }: CTABannerProps) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerSize, setBannerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const node = bannerRef.current;
    if (!node) return;

    const updateSize = () => {
      const rect = node.getBoundingClientRect();
      const nextSize = { width: rect.width, height: rect.height };
      setBannerSize(nextSize);
      onSizeChange?.(nextSize);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, [onSizeChange]);

  const buttonStyle = useMemo(() => {
    const baseWidth = 1152;
    const baseButtonWidth = 187;
    const baseButtonHeight = 51;
    const baseLeft = 0.065;
    const baseBottom = 0.16;
    const scale = bannerSize.width ? bannerSize.width / baseWidth : 1;

    const padding = Math.max(8, Math.round(14 * scale));
    const maxButtonWidth = Math.max(0, bannerSize.width - padding * 2);
    const maxButtonHeight = Math.max(0, bannerSize.height - padding * 2);
    const buttonWidth = Math.min(Math.round(baseButtonWidth * scale), maxButtonWidth);
    const buttonHeight = Math.min(Math.round(baseButtonHeight * scale), maxButtonHeight);
    const baseFontSize = 14;
    const text = "Book a Site Visit.";
    const widthBasedSize = buttonWidth / (text.length * 0.6);
    const heightBasedSize = buttonHeight * 0.55;
    const mobileScale = bannerSize.width < 500 ? 0.62 : 1;
    const fontSize = Math.max(
      6,
      Math.min(
        Math.round(baseFontSize * scale * mobileScale),
        widthBasedSize * 0.82,
        heightBasedSize * 0.82
      )
    );
    const desiredLeft = bannerSize.width ? bannerSize.width * baseLeft : 0;
    const desiredBottom = bannerSize.height ? bannerSize.height * baseBottom : 0;
    const maxLeft = Math.max(padding, bannerSize.width - buttonWidth - padding);
    const maxBottom = Math.max(padding, bannerSize.height - buttonHeight - padding);
    const left = Math.min(Math.max(desiredLeft, padding), maxLeft);
    const bottom = Math.min(Math.max(desiredBottom, padding), maxBottom);

    return {
      width: buttonWidth,
      height: buttonHeight,
      fontSize,
      lineHeight: 1,
      left,
      bottom,
    } as const;
  }, [bannerSize]);

  const isOverlay = variant === "overlay";
  const wrapperClassName = [
    isOverlay
      ? "absolute inset-x-0 top-0 z-10 px-4 sm:px-6"
      : "relative z-10 px-4 sm:px-6 mt-4 sm:mt-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClassName}
      style={
        isOverlay
          ? { transform: "translateY(-50%)" }
          : bannerSize.height
              ? { marginBottom: -(bannerSize.height / 2) }
              : undefined
      }
    >
      <div
        ref={bannerRef}
        className="relative max-w-6xl sm:max-w-4xl md:max-w-6xl mx-auto rounded-[24px] overflow-hidden"
      >
        <img
          src={ctaBanner}
          alt="Zen Realty gives you home where ZEN is Reality"
          className="w-full h-auto block"
        />
        <button
          type="button"
          className="absolute rounded-full border border-white/80 bg-white text-black font-semibold shadow-sm transition-colors hover:bg-[#5ebbcd] hover:text-white active:bg-[#20A4BE] active:text-white whitespace-nowrap"
          style={{ fontFamily: "Poppins, sans-serif", ...buttonStyle }}
        >
          Book a Site Visit.
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
