module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",

    'prettier/prettier': 'error',
    camelcase: "off",
    "global-require": "off",

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
  },
};
