module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./scr"],
          alias: {
            "@modules": "./src/modules",
            "@routes": "./src/routes",
            "@shared": "./src/shared",
          },
        },
      ],
      [
        "react-native-reanimated/plugin",
        {
          globals: ["__scanCodes"],
        },
      ],
    ],
  };
};
