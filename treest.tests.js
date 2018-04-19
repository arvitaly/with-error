"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const fixtures_1 = require("./fixtures");
test("when withError callback non-promisify and not thrown exception, should return result", () => {
    _1.default(fixtures_1.test1);
});
test("when withError callback is promisify and not throw exception, should return promise with result", () => __awaiter(this, void 0, void 0, function* () {
    yield _1.default(fixtures_1.test2);
}));
test("when withError callback non-promisify and thrown exception, should return error", () => {
    _1.default(fixtures_1.test3);
});
test("when withError callback promisify and thrown exception, should return error", () => __awaiter(this, void 0, void 0, function* () {
    yield _1.default(fixtures_1.test4);
}));
