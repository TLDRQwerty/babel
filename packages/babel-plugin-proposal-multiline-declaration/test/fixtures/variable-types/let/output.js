let foo = (() => {
  return 'bar';
})();

expect(foo).toBe('bar');
