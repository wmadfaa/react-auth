module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
  rules: {
    "unit-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme"],
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};
