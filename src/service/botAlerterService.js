import bseService from './bseService.js';
import telegramApi from '../api/telegramApi.js';

const getMessage = (entry) => {
  const scripname = entry.scripname.replace('&', ' ');
  return `<a href="${entry.URL}">${scripname}</a> : ${entry.change_percent}% : ₹${entry.ltradert}  <a href="https://www.google.com/finance/quote/${scripname}:NSE">📰</a>\n`;
};

const alertTopPerformersAndLosers = async (isTopPerformers = true) => {
  const topPerformers = await bseService.getTopPerformersAndLosers(isTopPerformers);
  const rows = topPerformers
    .gainersAndLoosers
    .slice(0, 40)
    .map(getMessage)
    .join('%0A');

  const interesting = topPerformers
    .interesting
    .map(getMessage)
    .join('%0A');

  const header = isTopPerformers ? 'BSE Gainers' : 'BSE Looser';
  const content = `${header}%0A-------------%0A${rows}%0A---INTERESTING---%0A${interesting}%0A--------------------%0A<a href="https://11akvs64nj.execute-api.ap-south-1.amazonaws.com/default/BseGainersBot"><b>Get Current</b></a>`;
  const response = await telegramApi.sendMessage(content);
  return response.statusText;
};

// eslint-disable-next-line max-len
const getTopPerfomers = async (isTopPerformers = true) => bseService.getTopPerformersAndLosers(isTopPerformers);

export default {
  alertTopPerformersAndLosers,
  getTopPerfomers,
};
