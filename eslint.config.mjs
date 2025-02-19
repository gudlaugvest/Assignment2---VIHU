// eslint.config.mjs
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier, // Prettier configuration to avoid conflicts

  {
    rules: {
      // Enforce camelCase for function names
      "camelcase": ["error", { properties: "always" }],

      // Forbid the use of moment.js
      "no-restricted-imports": [
        "error",
        {
          paths: ["moment"],
          message: "Usage of moment.js is forbidden. Consider using date-fns or native Date API.",
        },
      ],

      // Forbid console.log but allow console.warn and console.error
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
