module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.js?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupTestFrameworkScriptFile": "<rootDir>/setupTests.js",
    "testURL": "http://localhost"
}

/**
 * CONFIG NOTES
 * testURL is temp fix for Window.get localStorage error that occurs when running Jest. Hopefully fixed soon. Try removing it & running tests. If a "SecurityError: localStorage is not available error appears", add it back.
 */