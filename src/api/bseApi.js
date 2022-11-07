import fetch from 'node-fetch';

const getTopPerformers = async () => {
  const response = await fetch('https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all');
  const data = await response.json();
  return data.Table;
};

export default {
  getTopPerformers,
};
