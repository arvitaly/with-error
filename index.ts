interface IWithErrorReturn<R> {
    result: R;
    error: any;
}
// tslint:disable callable-types
interface IWithErrorPromise {
    <R>(cb: () => R): IWithErrorReturn<R>;
}
interface IWithErrorPromise {
    <R>(cb: () => Promise<R>): Promise<IWithErrorReturn<R>>;
}
const withError = (cb: () => any): any => {
    let result: any;
    try {
        result = cb();
    } catch (e) {
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
export default withError as (IWithErrorPromise);
