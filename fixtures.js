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
function test1() {
    return "test";
}
exports.test1 = test1;
function test2() {
    return __awaiter(this, void 0, void 0, function* () {
        return "test2";
    });
}
exports.test2 = test2;
function test3() {
    throw new Error("test3");
}
exports.test3 = test3;
function test4() {
    return __awaiter(this, void 0, void 0, function* () {
        throw new Error("test4");
    });
}
exports.test4 = test4;
