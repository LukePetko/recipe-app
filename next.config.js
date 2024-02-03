const withPWA = require("next-pwa")({
  dest: "public",
});

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
