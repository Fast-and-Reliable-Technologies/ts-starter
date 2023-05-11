export interface GreetingService {
  create(name?: string): string;
}

export class HelloWorldGreetingService implements GreetingService {
  create(name = 'World'): string {
    return `Hello, ${name}!`;
  }
}
