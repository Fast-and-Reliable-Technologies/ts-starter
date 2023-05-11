require('dotenv').config();

import {helloWorld} from './';

const PORT = process.env.PORT ?? 8080;

helloWorld.listen(PORT, () => {
  console.log(`Running on port=${PORT}`);
});
