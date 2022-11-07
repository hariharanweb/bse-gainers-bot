import _ from 'lodash';
import bseApi from '../api/bseApi';

const getTopPerformers = async (group = 'A') => {
  const topPerformers = await bseApi.getTopPerformers();
  const filteredTopPerformers = topPerformers
    .filter((entry) => entry.scrip_grp === group && entry.change_percent >= 1.95);
  return _.sortBy(filteredTopPerformers, (entry) => entry.change_percent).reverse();
};

export default {
  getTopPerformers,
};
