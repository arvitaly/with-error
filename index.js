"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withError = (cb) => {
    let result;
    try {
        result = cb();
    }
    catch (e) {
        return {
            error: e,
        };
    }
    if (!(result instanceof Promise)) {
        return { result };
    }
    return result.then((res) => ({
        result: res,
    })).catch((e) => ({
        error: e,
    }));
};
exports.default = withError;
