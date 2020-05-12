/**
 * @since May 12 2020
 * @author Sanjay Idpuganti
 * @param {Iterable} iterable 
 */
module.exports = function* enumerate(iterable) {
    let index = 0
    for (const value of iterable) {
        yield [index++, value]
    }
}