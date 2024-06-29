const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  purge: {
    mode: "layers",
    content: [
      "./public/**/*.html",
      "./src/**/*.vue",
      "./node_modules/@redpay.admin/components/dist/*.js",
    ],
    defaultExtractor: (content) => {
      const contentWithoutStyleBlocks = content.replace(
        /<style[^]+?<\/style>/gi,
        ""
      );
      return (
        contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
        []
      );
    },
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
    ],
  },
  theme: {
    colors: {
      ...colors,
      "pc-blue": "var(--pc-blue)",
      "pc-dark-blue": "var(--pc-dark-blue)",
      background: "rgba(var(--background))",
      border: "rgba(var(--border))",
      card: "rgba(var(--card))",
      "copy-primary": "rgba(var(--copy-primary))",
      "copy-secondary": "rgba(var(--copy-secondary))",
      cta: "rgba(var(--cta))",
      "cta-active": "rgba(var(--cta-active))",
      "cta-text": "rgba(var(--cta-text))",
    },
    extend: {
      borderColor: {
        "gradient-to-right":
          "linear-gradient(to right, #pc-blue, #pc-dark-blue)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "425px" },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      translate: ["group-hover"],
    },
  },
};
