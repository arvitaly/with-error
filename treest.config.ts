import { test1, test2, test3, test4 } from "./fixtures";
const fixtures = [test1, test2, test3, test4];
export default {
    tests: fixtures.map((f) => ({
        module: "./index",
        exportName: "default",
        args: [f],
    })),
};
