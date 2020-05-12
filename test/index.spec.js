const enumerate = require('../src')


it('Should return 0 as first index when single element iterable is passed', () => {
    var e = enumerate([1])
    let [index] = e.next().value

    expect(index).toBe(0)
})
