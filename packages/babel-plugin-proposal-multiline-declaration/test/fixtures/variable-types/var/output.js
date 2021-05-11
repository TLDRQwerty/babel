var foo = (() => {
  return 'bar';
})();

expect(foo).toBe('bar');
