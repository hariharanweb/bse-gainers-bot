import fetch from 'node-fetch';
import https from 'https';

const agent = new https.Agent({
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3',
});

const getTopPerformersAndLoosers = async (isTopPerformer) => {
  const type = isTopPerformer ? 'gainer' : 'loser';
  try {
    console.log('**** Calling the API *****');
    const response = await fetch(`https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserDataeqto/w?GLtype=${type}&IndxGrp=group&IndxGrpval=A&orderby=all`, {
      agent,
      headers: {
        'REFERER':'https://www.bseindia.com/',
      },
    });
    console.log('**** End the API *****', response);
    const data = await response.json();
    if(data.Table){
      return data.Table;  
    } else {
      console.error(`API errored for ${isTopPerformer}`, response.status, response.data);
      throw Exception(`API errored for ${isTopPerformer}`)
    }    
  } catch (error) {
    console.log('**** Err in the API *****');
    console.error(error);
    throw error;  
  }  
};

export default {
  getTopPerformersAndLoosers,
};
