import fetch from 'node-fetch';

const getTopPerformersAndLoosers = async (isTopPerformer) => {
  const type = isTopPerformer ? 'gainers' : 'loosers';
  const response = await fetch(`https://www.nseindia.com/api/live-analysis-variations?index=${type}`);
  return response.json();
};

export default {
  getTopPerformersAndLoosers,
};
