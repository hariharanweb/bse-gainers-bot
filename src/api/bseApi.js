import fetch from 'node-fetch';

const getTopPerformersAndLoosers = async (isTopPerformer) => {
  const type = isTopPerformer ? 'gainer' : 'loser';
  const response = await fetch(`https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=${type}&IndxGrp=group&IndxGrpval=A&orderby=all`, {
    headers: {
      referer: 'https://www.bseindia.com/',
    },
  });
  const data = await response.json();
  return data.Table;
};

export default {
  getTopPerformersAndLoosers,
};
