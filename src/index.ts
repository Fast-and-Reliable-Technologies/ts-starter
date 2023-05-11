import * as express from 'express';
import {GreetingService, HelloWorldGreetingService} from './greetings';

const app = express();
const greetings: GreetingService = new HelloWorldGreetingService();

app.get('/', (req, res) => {
  res.send(greetings.create());
});

app.get('/:name', (req, res) => {
  const {name} = req.params;
  res.send(greetings.create(name));
});

export const helloWorld = app;
export * from './greetings';
