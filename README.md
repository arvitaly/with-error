# with-error

Either monad for work with exceptions in JavaScript. Go-style.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

# Why?

Because, exceptions may be the way to callback-hell.

```typescript
try{
    func();
}catch(e){
    try{
        func2()
    }catch(e){
        // HELL
    }    
}
```

# Install

    npm install with-error --save

    or

    yarn add with-error

# Usage

```typescript
import withError from "with-error";

// Non-promisify successfully result
const { result } = withError(() => "result1");

console.log(result.toUpperCase()); // RESULT1

// Non-promisify failure result
const { error, result } = withError((): string => { throw new Error("Error1"); } );

if (error) {
    console.log(error.toString()); // Error1
}

// Promisify successfully result
const { result } = await withError(() => Promise.resolve("result1"));

console.log(result.toUpperCase()); // RESULT1

// Non-promisify failure result

const { result, error } = await withError(() => Promise.reject(new Error("Error1")));
if (error) {
        console.log(error.toString()); // Error1
}

// Also supported array-like response

const [users, error] = await withError(() => Promise.resolve(["user1"]));

```


# API

```typescript
// Response
type IWithErrorReturn<R> = [
    R,
    any
] & { error: any, result: R };
// non-promisify with-error
interface IWithError {
    <R>(cb: () => R): IWithErrorReturn<R>;
}
// promisify with-error
interface IWithError {
    <R>(cb: () => Promise<R>): Promise<IWithErrorReturn<R>>;
}
```    

# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/with-error.svg
[npm-url]: https://npmjs.org/package/with-error
[travis-image]: https://travis-ci.org/arvitaly/with-error.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/with-error
[daviddm-image]: https://david-dm.org/arvitaly/with-error.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/with-error
[coveralls-image]: https://coveralls.io/repos/arvitaly/with-error/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/with-error