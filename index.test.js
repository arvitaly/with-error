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
it("when withError callback non-promisify and not thrown exception, should return result", () => {
    const [result] = _1.default(() => "test");
    expect(result.toUpperCase()).toBe("TEST");
});
it("when withError callback is promisify and not throw exception, should return promise with result", () => __awaiter(this, void 0, void 0, function* () {
    const { result } = yield _1.default(() => Promise.resolve("test2"));
    expect(result.toUpperCase()).toBe("TEST2");
}));
it("when withError callback non-promisify and thrown exception, should return error", () => {
    const { error } = _1.default(() => { throw new Error("Error1"); });
    expect(error).toEqual(new Error("Error1"));
});
it("when withError callback promisify and thrown exception, should return error", () => __awaiter(this, void 0, void 0, function* () {
    const { error } = yield _1.default(() => Promise.reject(new Error("Error2")));
    expect(error).toEqual(new Error("Error2"));
}));
