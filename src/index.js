function* enumerate(iterable) {
    let index = 0
    for (const value of iterable) {
        yield [index++, value]
    }
}


export { enumerate }