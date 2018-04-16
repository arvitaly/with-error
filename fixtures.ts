export function test1() {
    return "test";
}
export async function test2() {
    return "test2";
}
export function test3() {
    throw new Error("test3");
}
export async function test4() {
    throw new Error("test4");
}
