import serverless from 'serverless-http';
import server from './src/server.js';

const serverlessHandler = serverless(server);

// eslint-disable-next-line import/prefer-default-export
export const handler = (event, context, callback) => {
  const response = serverlessHandler(event, context, callback);
  return response;
};
