import DLF from "@/assets/DLF.png";
import Elan from "@/assets/Elan.png";
import Emaar from "@/assets/Emaar.png";
import Godrej from "@/assets/Godrej.png";
import Mahindra from "@/assets/Mahindra.png";
import Pallonji from "@/assets/Pallonji.png";
import Puri from "@/assets/Puri.png";
import TataHousing from "@/assets/Tata Housing.png";
import Whiteland from "@/assets/Whiteland.png";
import FourS from "@/assets/4S.png";
import ATS from "@/assets/ATS.png";
import M3M from "@/assets/M3M.png";
import Paras from "@/assets/Paras.png";
import SilverGlade from "@/assets/SilverGlade.png";
import Tarc from "@/assets/Tarc.png";
import Trehan from "@/assets/Trehan.png";
import Trevoc from "@/assets/Trevoc.png";
import TrumpTower from "@/assets/Trump Tower.png";
import Conscient from "@/assets/Conscient.png";
import MaxEstates from "@/assets/Max Estates.png";
import Oberoi from "@/assets/Oberoi.png";
import Omaxe from "@/assets/Omaxe.png";
import Pyramid from "@/assets/Pyramid.png";
import Reliance from "@/assets/Reliance.png";
import SignatureGlobal from "@/assets/Signature Global.png";
import Sobha from "@/assets/Sobha.png";
import Tribeca from "@/assets/Tribeca.png";

export type DeveloperLogo = { src: string; alt: string };

export const developerLogoRows: DeveloperLogo[][] = [
  [
    { src: DLF, alt: "DLF" },
    { src: Elan, alt: "Elan" },
    { src: Emaar, alt: "Emaar" },
    { src: Godrej, alt: "Godrej" },
    { src: Mahindra, alt: "Mahindra" },
    { src: Pallonji, alt: "Pallonji" },
    { src: Puri, alt: "Puri" },
    { src: TataHousing, alt: "Tata Housing" },
    { src: Whiteland, alt: "Whiteland" },
  ],
  [
    { src: FourS, alt: "4S" },
    { src: ATS, alt: "ATS" },
    { src: M3M, alt: "M3M" },
    { src: Paras, alt: "Paras" },
    { src: SilverGlade, alt: "SilverGlade" },
    { src: Tarc, alt: "Tarc" },
    { src: Trehan, alt: "Trehan" },
    { src: Trevoc, alt: "Trevoc" },
    { src: TrumpTower, alt: "Trump Tower" },
  ],
  [
    { src: Conscient, alt: "Conscient" },
    { src: MaxEstates, alt: "Max Estates" },
    { src: Oberoi, alt: "Oberoi" },
    { src: Omaxe, alt: "Omaxe" },
    { src: Pyramid, alt: "Pyramid" },
    { src: Reliance, alt: "Reliance" },
    { src: SignatureGlobal, alt: "Signature Global" },
    { src: Sobha, alt: "Sobha" },
    { src: Tribeca, alt: "Tribeca" },
  ],
];

export const developerLogos: DeveloperLogo[] = developerLogoRows.flat();
