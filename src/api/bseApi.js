import fetch from 'node-fetch';

const getTopPerformersAndLoosers = async (isTopPerformer) => {
  const type = isTopPerformer ? 'gainer' : 'loser';
  try {
    const response = await fetch(`https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserDataeqto/w?GLtype=${type}&IndxGrp=group&IndxGrpval=A&orderby=all`, {
      headers: {
        'REFERER':'https://www.bseindia.com/',
      },
    });
    const data = await response.json();
    if(data.Table){
      return data.Table;  
    } else {
      console.error(`API errored for ${isTopPerformer}`, response.status, response.data);
      throw Exception(`API errored for ${isTopPerformer}`)
    }    
  } catch (error) {
    console.error(error);
    throw error;  
  }  
};

export default {
  getTopPerformersAndLoosers,
};
