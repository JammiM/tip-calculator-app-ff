/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["@morev/stylelint-plugin"],
  overrides: [
    {
      files: ["**/*.{css,scss}"],
      rules: {
        "@morev/base/no-selectors-in-at-rules": true,
        "@morev/sass/no-unused-variables": true,

        "@morev/bem/block-variable": true,
        "@morev/bem/match-file-name": true,
        "@morev/bem/no-block-properties": [
          true,
          {
            presets: ["EXTERNAL_GEOMETRY", "CONTEXT"],
          },
        ],
        "@morev/bem/no-chained-entities": true,
        "@morev/bem/no-side-effects": true,
        "@morev/bem/selector-pattern": true,
        "selector-class-pattern": null,
      },
    },
  ],
};
