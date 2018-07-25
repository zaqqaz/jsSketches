const path = require("path");

module.exports = {
    "transform": {
        "^.+\\.(ts|tsx)$": path.resolve(__dirname, "node_modules", "ts-jest"),
    },
    "testRegex": ".*\\.spec\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
};
