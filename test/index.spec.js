const enumerate = require('../src')


it('Should return 0 as first index', () => {
    var e = enumerate([1])
    let [index] = e.next().value

    expect(index).toBe(0)
})