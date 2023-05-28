import { defineConfig, presetWebFonts, presetWind } from "unocss";

function convertToRem(value: string) {
  return `${(+value / 10).toLocaleString("en-PH", {
    maximumFractionDigits: 3,
  })}rem`;
}

export default defineConfig({
  presets: [presetWind(), presetWebFonts()],
  preflights: [
    {
      getCSS: ({ theme }) =>
        `:root { font-size: 62.5%; font-family: 'Kumbh Sans', sans-serif }`,
    },
  ],
});
