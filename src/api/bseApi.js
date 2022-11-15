import fetch from 'node-fetch';

const getTopPerformers = async () => {
  const response = await fetch('https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=group&IndxGrpval=A&orderby=all');
  const data = await response.json();
  return data.Table;
};

const getTopLosers = async () => {
  const response = await fetch('https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=loser&IndxGrp=group&IndxGrpval=A&orderby=all');
  const data = await response.json();
  return data.Table;
};

export default {
  getTopPerformers,
  getTopLosers,
};
