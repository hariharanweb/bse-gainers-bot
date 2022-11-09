import botAlerterService from './service/botAlerterService.js';

const send = async () => {
  await botAlerterService.alertTopPerformers();
};
send();
