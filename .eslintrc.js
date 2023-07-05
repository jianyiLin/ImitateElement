module.exports = {

  root: true,
  env: {
    node: true,
    // "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
