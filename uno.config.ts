import { defineConfig, presetWebFonts, presetWind } from "unocss";

function convertToRem(value: string) {
  return `${(+value / 10).toLocaleString("en-PH", {
    maximumFractionDigits: 3,
  })}rem`;
}

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "IBM Plex Sans:400,700" },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) =>
        `:root { font-size: 62.5%; font-family: 'IBM Plex Sans', sans-serif }`,
    },
  ],
  theme: {
    colors: {
      seashell: "#FCFAF9",
      "black-russian": "#191826",
      coral: "#FA7453",
    },
    breakpoints: {
      tablet: "768px",
      desktop: "1440px",
    },
  },
  shortcuts: {
    logo: "w-146.09 h-32",
    button:
      "fw-700 fs-18 leading-32 -tracking-.18 flex items-center justify-center gap-y-7.92 pt-15 pb-14 rounded-12",
  },
  rules: [
    [
      /^pt-([\d.]+)$/,
      ([, value]) => ({
        "padding-top": convertToRem(value),
      }),
    ],
    [
      /^px-([\d.]+)$/,
      ([, value]) => ({
        "padding-inline": convertToRem(value),
      }),
    ],
    [
      /^w-([\d.]+)$/,
      ([, value]) => ({
        width: convertToRem(value),
      }),
    ],
    [
      /^h-([\d.]+)$/,
      ([, value]) => ({
        height: convertToRem(value),
      }),
    ],
    [
      /^mt-([\d.]+)$/,
      ([, value]) => ({
        "margin-top": convertToRem(value),
      }),
    ],
    [
      /^fs-([\d.]+)$/,
      ([, value]) => ({
        "font-size": convertToRem(value),
      }),
    ],
    [
      /^leading-([\d.]+)$/,
      ([, value]) => ({
        "line-height": convertToRem(value),
      }),
    ],
    [
      /^tracking-([\d.]+)$/,
      ([, value]) => ({
        "letter-spacing": convertToRem(value),
      }),
    ],
    [
      "bg-mobile",
      {
        "background-image": "url(/bg-main-mobile.png)",
      },
    ],
    [
      /^py-([\d.]+)$/,
      ([, value]) => ({
        "padding-block": convertToRem(value),
      }),
    ],
    [
      /^rounded-([\d.]+)$/,
      ([, value]) => ({
        "border-radius": convertToRem(value),
      }),
    ],
    [
      /^gap-y-([\d.]+)$/,
      ([, value]) => ({
        "grid-column-gap": convertToRem(value),
        "column-gap": convertToRem(value),
      }),
    ],
    [
      /^gap-x-([\d.]+)$/,
      ([, value]) => ({
        "grid-row-gap": convertToRem(value),
        "row-gap": convertToRem(value),
      }),
    ],
    [
      /^pb-([\d.]+)$/,
      ([, value]) => ({
        "padding-bottom": convertToRem(value),
      }),
    ],
    [
      "bg-pattern",
      {
        "background-image": " url(/bg-pattern-2.svg)",
      },
    ],
    [
      /^top-([\d.]+)$/,
      ([, value]) => ({
        top: convertToRem(value),
      }),
    ],
    [
      /^bs-([\d.]+)\/([\d.]+)$/,
      ([, firstValue, secondValue]) => ({
        "background-size": `${convertToRem(firstValue)} ${convertToRem(
          secondValue
        )}`,
      }),
    ],
    [
      /^bg-y-([\d.-]+)$/,
      ([, value]) => ({
        "background-position-y": convertToRem(value),
      }),
    ],
    [
      /^pr-([\d.-]+)$/,
      ([, value]) => ({
        "padding-right": convertToRem(value),
      }),
    ],
    [
      /^pl-([\d.-]+)$/,
      ([, value]) => ({
        "padding-left": convertToRem(value),
      }),
    ],
    [
      /^mr-([\d.-]+)$/,
      ([, value]) => ({
        "margin-right": convertToRem(value),
      }),
    ],
    [
      /^ml-([\d.-]+)$/,
      ([, value]) => ({
        "margin-left": convertToRem(value),
      }),
    ],
    [
      /^translate-x-([\d.-]+)$/,
      ([, value]) => ({
        "--un-translate-x": convertToRem(value),
        transform: `translateX(var(--un-translate-x))
        translateY(var(--un-translate-y)) translateZ(var(--un-translate-z))
        rotate(var(--un-rotate)) rotateX(var(--un-rotate-x))
        rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z))
        skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x))
        scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))`,
      }),
    ],
    [
      /^p-([\d.-]+)$/,
      ([, value]) => ({
        padding: convertToRem(value),
      }),
    ],
    [
      /^max-w-([\d.-]+)$/,
      ([, value]) => ({
        "max-width": convertToRem(value),
      }),
    ],
    [
      /^right-([\d.]+)$/,
      ([, value]) => ({
        right: convertToRem(value),
      }),
    ],
    [
      "bg-tablet",
      {
        "background-image": "url(/bg-main-tablet.png)",
      },
    ],
    [
      /^bg-x-([\d.-]+)$/,
      ([, value]) => ({
        "background-position-x": convertToRem(value),
      }),
    ],
  ],
});
