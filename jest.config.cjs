module.exports = {
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/src/test/__mocks__/fileMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$", "\\.png$"],
};
