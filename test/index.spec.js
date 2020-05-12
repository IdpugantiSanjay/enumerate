const enumerate = require('../src')


it('Should return 0 as first index when single element iterable is passed', () => {
    var e = enumerate([1])
    let [index] = e.next().value

    expect(index).toBe(0)
})


it('Should throw error when nothing is passed', () => {
    function iterate() {
        for (const i of enumerate()) { }
    }
    expect(iterate).toThrow(Error)
})