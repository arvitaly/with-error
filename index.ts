type IWithErrorReturn<R> = [
    R,
    any
] & { error: any, result: R };
// tslint:disable callable-types
interface IWithError {
    <R>(cb: () => R): IWithErrorReturn<R>;
}
interface IWithError {
    <R>(cb: () => Promise<R>): Promise<IWithErrorReturn<R>>;
}
const withError = (cb: () => any): any => {
    let result: any;
    try {
        result = cb();
    } catch (e) {
        const response: any = [undefined, e];
        response.result = undefined;
        response.error = e;
        return response;
    }
    if (!(result instanceof Promise)) {
        const response: any = [result];
        response.result = result;
        response.error = undefined;
        return response;
    }
    return result.then((res) => {
        const response: any = [res];
        response.result = res;
        response.error = undefined;
        return response;
    }).catch((e) => {
        const response: any = [undefined, e];
        response.result = undefined;
        response.error = e;
        return response;
    });
};
export default withError as (IWithError);
