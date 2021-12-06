import {hello} from './hello';

describe('Test greetings', () => {
	it('should respond to name', () => {
		expect(hello('World')).toEqual('Hello, World.');
	});

	it('should respond default string', () => {
		expect(hello()).toEqual('Hello who?');
	});
});