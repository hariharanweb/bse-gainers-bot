import botAlerterService from './src/service/botAlerterService.js';

// eslint-disable-next-line import/prefer-default-export
export const handler = async (event) => {
  let operation;
  if (event && event.queryStringParameters && event.queryStringParameters.operation) {
    operation = event.queryStringParameters.operation;
  }
  if (operation === 'echo') {
    return (event.payload);
  }
  switch (operation) {
    case 'gainers':
      return botAlerterService.getTopPerfomers(true);
    case 'loosers':
      return botAlerterService.getTopPerfomers(false);
    default:
      const botAlerterResponse1 = await botAlerterService.alertTopPerformersAndLosers();
      const botAlerterResponse2 = await botAlerterService.alertTopPerformersAndLosers(false);
      return {
        statusCode: 200,
        body: JSON.stringify(`Sent at ${new Date()} with Response ${botAlerterResponse1} ${botAlerterResponse2}`),
      };
  }
};
