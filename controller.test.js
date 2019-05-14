const createGreeting = require('./controller');

test('get hello world', () => {
	const result = createGreeting(name);
	
	expect(result).toBe(`${name} 안녕`);
});
