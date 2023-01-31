import botAlerterService from './src/service/botAlerterService.js';

// eslint-disable-next-line import/prefer-default-export
export const handler = async (event) => {
  let operation;
  if (event && event.queryStringParameters && event.queryStringParameters.operation) {
    operation = event.queryStringParameters.operation;
  }
  console.log(operation);
  if (operation === 'echo') {
    return (event.payload);
  }
  switch (operation) {
    case 'gainers':
      const gainers = await botAlerterService.getTopPerfomers(true);
      console.log(gainers);
      return {
        statusCode: 200,
        body: gainers,
      };
    case 'loosers':
      const loosers = await botAlerterService.getTopPerfomers(false);
      console.log(loosers);
      return {
        statusCode: 200,
        body: loosers,
      };
    default:
      const botAlerterResponse1 = await botAlerterService.alertTopPerformersAndLosers();
      const botAlerterResponse2 = await botAlerterService.alertTopPerformersAndLosers(false);
      return {
        statusCode: 200,
        body: JSON.stringify(`Sent at ${new Date()} with Response ${botAlerterResponse1} ${botAlerterResponse2}`),
      };
  }
};
