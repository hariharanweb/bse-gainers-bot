import bseService from './bseService.js';
import telegramApi from '../api/telegramApi.js';

const alertTopPerformers = async () => {
  const topPerformers = await bseService.getTopPerformers();
  const rows = topPerformers
    .slice(0, 15)
    .map((entry) => `${entry.scripname} : ${entry.change_percent}% : ₹${entry.ltradert}\n`).join('%0A');
  const content = `BSE Gainers%0A-------------%0A${rows}%0A-------------%0A<a href="https://461wkvpgqg.execute-api.us-west-2.amazonaws.com/default/BseGainersBot"><b>Get Current</b></a>`;
  const response = await telegramApi.sendMessage(content);
  return response.statusText;
};

export default {
  alertTopPerformers,
};
