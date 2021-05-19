var foo => async {
    return 'bar';
};

expect(foo).resolves.toBe('bar');