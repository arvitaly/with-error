import withError from ".";

it("when withError callback non-promisify and not thrown exception, should return result", () => {
    const { result } = withError(() => "test");
    expect(result.toUpperCase()).toBe("TEST");
});
it("when withError callback is promisify and not throw exception, should return promise with result", async () => {
    const { result } = await withError(() => Promise.resolve("test2"));
    expect(result.toUpperCase()).toBe("TEST2");
});
it("when withError callback non-promisify and thrown exception, should return error", () => {
    const { error } = withError((): string => { throw new Error("Error1"); });
    expect(error).toEqual(new Error("Error1"));
});
it("when withError callback promisify and thrown exception, should return error", async () => {
    const { error } = await withError(() => Promise.reject(new Error("Error2")));
    expect(error).toEqual(new Error("Error2"));
});
