
it('works with resolves', () => {
    // expect.assertions(1);
    return expect(1).toEqual(1);
});


describe('outer', () => {
    it('does someting cool', () => {
        return expect(NaN).toBeNaN();
    });

    // it('does fails cool', () => {
    //     return expect().toBeNaN();
    // });

    // test.only('this will be the only test that runs', () => {
    //     expect(true).toBe(false);
    // });
});
