var foo => {
	var baz => {
		return 'bar';
	}
  return baz;
}

expect(foo).toBe('bar');
