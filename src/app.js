import botAlerterService from './service/botAlerterService.js';

const send = async () => {
  await botAlerterService.alertTopPerformersAndLosers(false);
  setTimeout(async () => {
    await botAlerterService.alertTopPerformersAndLosers(true);
  }, 10000);
};
send();
