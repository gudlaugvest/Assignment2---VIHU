import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // Basic JS rules
  prettier, // Prettier integration to avoid conflicts

  {
    rules: {
      // ✅ Corrected enforcement of camelCase
      "camelcase": ["error", { properties: "always" }],

      // ✅ Correct format for restricting imports in ESLint 9+
      "no-restricted-imports": [
        "error",
        {
          name: "moment",
          message: "Usage of moment.js is forbidden. Consider using date-fns or native Date API.",
        },
      ],

      // ✅ Forbid console.log but allow console.warn and console.error
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
