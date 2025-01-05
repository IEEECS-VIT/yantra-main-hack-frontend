import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Corrected ESLint config syntax
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables error
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
      "react/no-unescaped-entities": "off", // Allow unescaped characters
      "react-hooks/exhaustive-deps": "warn", // Warn for missing dependencies in useEffect
      "@typescript-eslint/ban-ts-comment": "off", // Allow '@ts-ignore' usage
    },
  },
];

export default eslintConfig;
