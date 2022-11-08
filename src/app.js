import botAlerterService from './service/botAlerterService.js';

const send = async () => {
    const response = await botAlerterService.alertTopPerformers();
    console.log(response)
}
send()
