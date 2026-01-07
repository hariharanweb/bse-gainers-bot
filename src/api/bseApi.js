import axios from 'axios';

const getTopPerformersAndLoosers = async (isTopPerformer) => {
  const type = isTopPerformer ? 'gainer' : 'loser';
  try {
    console.log('**** Calling the API *****');
    const response = await axios.get(
      `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserDataeqto/w?GLtype=${type}&IndxGrp=group&IndxGrpval=A&orderby=all`,
      { 'headers': { 'referer': 'https://www.bseindia.com/' } }
    )
    console.log('Response ', response);
    const data = response.data;
    if (data.Table) {
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
