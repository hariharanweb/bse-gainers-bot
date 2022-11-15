import botAlerterService from './service/botAlerterService.js';

const send = async () => {
  await botAlerterService.alertTopPerformersAndLosers(true);
  await botAlerterService.alertTopPerformersAndLosers(false);
};
send();
