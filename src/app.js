import botAlerterService from './service/botAlerterService.js';

const send = async () => {
  const gainerTask = botAlerterService.alertTopPerformersAndLosers(true);
  const looserTask = botAlerterService.alertTopPerformersAndLosers(false);
  await Promise.all([
    gainerTask, looserTask,
  ]);
};

send();
