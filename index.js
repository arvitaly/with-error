"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withError = (cb) => {
    let result;
    try {
        result = cb();
    }
    catch (e) {
        const response = [undefined, e];
        response.result = undefined;
        response.error = e;
        return response;
    }
    if (!(result instanceof Promise)) {
        const response = [result];
        response.result = result;
        response.error = undefined;
        return response;
    }
    return result.then((res) => {
        const response = [res];
        response.result = res;
        response.error = undefined;
        return response;
    }).catch((e) => {
        const response = [undefined, e];
        response.result = undefined;
        response.error = e;
        return response;
    });
};
exports.default = withError;
