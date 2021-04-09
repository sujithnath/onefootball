module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    amd: true,
  },
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["babel", "jsx-a11y", "prettier", "react", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
};
