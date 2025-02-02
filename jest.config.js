const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom", // ✅ Use explicit test environment
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }], // ✅ Use Next.js Babel preset
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1" // ✅ Ensure correct aliasing
    },
    collectCoverageFrom: ["src/**/*.{ts,tsx}"], // ✅ Include all TS/TSX files for coverage
};

module.exports = createJestConfig(customJestConfig);
