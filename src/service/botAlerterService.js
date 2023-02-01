import bseService from './bseService.js';
import telegramApi from '../api/telegramApi.js';

const alertTopPerformersAndLosers = async (isTopPerformers = true) => {
  const topPerformers = await bseService.getTopPerformersAndLosers(isTopPerformers);
  let rows = topPerformers
    .slice(0, 30)
    .map((entry) => `<a href="${entry.URL}">${entry.scripname}</a> : ${entry.change_percent}% : ₹${entry.ltradert}  <a href="https://news.google.com/search?q=${entry.scripname}%20share">📰</a>\n`)
    .join('%0A');
  rows = rows.replace('&', ' ');
  const header = isTopPerformers ? 'BSE Gainers' : 'BSE Looser';
  const content = `${header}%0A-------------%0A${rows}%0A-------------%0A<a href="https://11akvs64nj.execute-api.ap-south-1.amazonaws.com/default/BseGainersBot"><b>Get Current</b></a>`;
  const response = await telegramApi.sendMessage(content);
  return response.statusText;
};

// eslint-disable-next-line max-len
const getTopPerfomers = async (isTopPerformers = true) => bseService.getTopPerformersAndLosers(isTopPerformers);

export default {
  alertTopPerformersAndLosers,
  getTopPerfomers,
};
