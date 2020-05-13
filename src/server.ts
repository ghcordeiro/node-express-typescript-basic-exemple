import express from 'express';
import routes from './routes';

const server = express();

server.use(routes);

server.listen(3333, () => {
  console.log('Server started on port 3333');
});
