module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "import-helpers",
  ],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": ["off", { ignoreRestArgs: false }],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    camelcase: "off",
    "global-require": "off",

    "import/prefer-default-export": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          ["/^@modules/", "/^@routes/", "/^@shared/"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "none", ignoreCase: true },
      },
    ],

    quotes: ["error", "single", { avoidEscape: true }],
    "no-empty-function": "off",
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": "error",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-await-in-loop": "off",
    "no-eval": "off",
    "no-restricted-syntax": "off",

    "prettier/prettier": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "linebreak-style": "off",
    semi: ["error", "always"],

    "react/no-children-prop": "off",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/jsx-no-undef": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/style-prop-object": [
      "off",
      {
        allow: ["error"],
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
