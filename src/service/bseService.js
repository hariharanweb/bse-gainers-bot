import _ from 'lodash';
import bseApi from '../api/bseApi.js';
import interestingStocks from './interestingStocks.js';

const checkThreshold = (entry, isTopPerformers) => (
  isTopPerformers
    ? entry.change_percent >= 1.5
    : entry.change_percent <= -1
);

const getTopPerformersAndLosers = async (isTopPerformers = true) => {
  const performers = await bseApi.getTopPerformersAndLoosers(isTopPerformers);
  const topPerformers = performers.filter((item) => item.scrip_grp === 'A');
  const filteredTopPerformers = topPerformers
    .filter((entry) => checkThreshold(entry, isTopPerformers));
  const result = isTopPerformers
    ? _.sortBy(filteredTopPerformers, (entry) => entry.change_percent).reverse()
    : _.sortBy(filteredTopPerformers, (entry) => entry.change_percent);
  const interesting = _.filter(topPerformers, interestingStocks.isInterestingStock);
  return {
    interesting,
    gainersAndLoosers: result,
  };
};

export default {
  getTopPerformersAndLosers,
};
