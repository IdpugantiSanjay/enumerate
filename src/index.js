/**
 * @since May 12 2020
 * @author Sanjay Idpuganti
 * @param {Iterable} iterable 
 */
function* enumerate(iterable) {
    let index = 0
    for (const value of iterable) {
        yield [index++, value]
    }
}


export { enumerate }