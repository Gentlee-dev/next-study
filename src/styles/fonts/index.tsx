// import "./Gilroy/Gilroy-Regular.otf";
// import "./Gilroy/Gilroy-SemiBold.otf";
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
