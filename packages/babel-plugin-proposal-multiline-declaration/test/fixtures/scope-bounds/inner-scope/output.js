var bar = undefined;

var foo = (() => {
  var bar = 'bar';
  return bar;
})();

expect(bar).toBeUndefined();
