module.export = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  testMatch: ["<rootDir>/src/**/>(*.)test.{js, jsx}"], // finds test
  moduleFileExtensions: ["js", "jsx", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/setupTests.js",
    "@testing-library/react/cleanup-after-each",
  ], // setupFiles before the tests are ran
};
