import * as express from 'express';
import * as compression from 'compression';
import { SearchApi } from './presentation/search.api';

const port = process.env.SERVER_PORT || 3333;
const app = express();

app.use(express.json());
app.use(compression());

app.use('/api/search', SearchApi);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
