import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const { TELEGRAM_BOT_KEY, TELEGRAM_GROUP_ID } = process.env;

const sendMessage = async (msg) => await fetch(
  `https://api.telegram.org/bot${TELEGRAM_BOT_KEY}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&text=${msg}&parse_mode=HTML`,
  {
    method: 'post',
  },
);

export default {
  sendMessage,
};
