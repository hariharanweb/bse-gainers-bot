import awsServerlessExpress from 'aws-serverless-express';
import server from './src/server.js';

const binaryMimeTypes = [
  "application/octet-stream",
  "font/eot",
  "font/opentype",
  "font/otf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
];

const awsServer = awsServerlessExpress.createServer(server, null, binaryMimeTypes);

export const handler = (event, context) => awsServerlessExpress.proxy(awsServer, event, context);