// import "./Gilroy/Gilroy-Regular.otf";
// import "./Gilroy/Gilroy-SemiBold.otf";
import { Noto_Sans } from "next/font/google";
import nextFontLocal from "next/font/local";

export const gilroy = nextFontLocal({
  src: [
    { path: "./Gilroy/Gilroy-Regular.otf", weight: "400", style: "normal" },
    { path: "./Gilroy/Gilroy-SemiBold.otf", weight: "500", style: "normal" },
  ],
  adjustFontFallback: "Times New Roman",
  preload: true,
  fallback: ["system-ui"],
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui"],
  preload: true,
  adjustFontFallback: true,
});
