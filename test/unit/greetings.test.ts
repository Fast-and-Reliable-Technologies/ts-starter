import {GreetingService, HelloWorldGreetingService} from '../../src/greetings';

describe('Greetings', () => {
  const greetings: GreetingService = new HelloWorldGreetingService();
  it('should handle default name', () => {
    const expected = 'Hello, World!';
    const actual = greetings.create();
    expect(actual).toEqual(expected);
  });

  it('should handle provided name', () => {
    const val = Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER);
    const name = `User-${val}`;
    const expected = `Hello, ${name}!`;
    const actual = greetings.create(name);
    expect(actual).toEqual(expected);
  });
});
