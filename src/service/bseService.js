import _ from 'lodash';
import bseApi from '../api/bseApi.js';

const checkThreshold = (entry, isTopPerformers) => (
  isTopPerformers
    ? entry.change_percent >= 1.5
    : entry.change_percent <= -0.6
);

const getTopPerformersAndLosers = async (isTopPerformers = true) => {
  const topPerformers = isTopPerformers
    ? await bseApi.getTopPerformers() : await bseApi.getTopLosers();
  const filteredTopPerformers = topPerformers
    .filter((entry) => checkThreshold(entry, isTopPerformers));
  return isTopPerformers
    ? _.sortBy(filteredTopPerformers, (entry) => entry.change_percent).reverse()
    : _.sortBy(filteredTopPerformers, (entry) => entry.change_percent);
};

export default {
  getTopPerformersAndLosers,
};
