import { hello } from './hello';

describe('Test greetings', () => {
	it('should respond to name', () => {
		expect(hello('World')).toEqual('Hello, World.');
	});
});