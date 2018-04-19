import withError from ".";
import { test1, test2, test3, test4 } from "./fixtures";
test("when withError callback non-promisify and not thrown exception, should return result", () => {
    withError(test1);
});
test("when withError callback is promisify and not throw exception, should return promise with result", async () => {
    await withError(test2);
});
test("when withError callback non-promisify and thrown exception, should return error", () => {
    withError(test3);
});
test("when withError callback promisify and thrown exception, should return error", async () => {
    await withError(test4);
});
