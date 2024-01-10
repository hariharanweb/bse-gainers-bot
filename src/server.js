import express from 'express';
import bseService from './service/bseService.js';
import botAlerterService from './service/botAlerterService.js';

const app = express();
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on port ${port}.`));

app.use((_, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/', async (req, res) => {
  const botAlerterResponse1 = await botAlerterService.alertTopPerformersAndLosers();
  const botAlerterResponse2 = await botAlerterService.alertTopPerformersAndLosers(false);
  res.send(
    { data: `Sent at ${new Date()} with Response ${botAlerterResponse1} ${botAlerterResponse2}` },
  );
});

app.get('/market', async (req, res) => {
  const type = req.query.type !== 'loosers';
  const topPerformers = await bseService.getTopPerformersAndLosers(type);
  res.send(topPerformers);
});

export default app;
