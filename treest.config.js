"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("./fixtures");
const fixtures = [fixtures_1.test1, fixtures_1.test2, fixtures_1.test3, fixtures_1.test4];
exports.default = {
    tests: fixtures.map((f) => ({
        module: "./index",
        exportName: "default",
        args: [f],
    })),
};
