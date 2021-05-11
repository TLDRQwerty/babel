var foo => {
    return 'bar';
};

foo = 'baz'

expect(foo).toBe('baz');