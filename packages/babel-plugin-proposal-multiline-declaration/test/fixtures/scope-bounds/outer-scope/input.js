var bar = 'bar';
var foo => {
  var bar = 'foo';
	return bar;
};

expect(bar).toBe('bar');