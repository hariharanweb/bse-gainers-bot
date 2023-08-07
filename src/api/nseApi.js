import fetch from 'node-fetch';

export default class NseApi {
  constructor() {
    this.url = 'https://www.nseindia.com/api/live-analysis-variations';
  }

  async getTopPerformersAndLooser(isTopPerformer) {
    try {
      const type = isTopPerformer ? 'gainers' : 'loosers';
      const response = await fetch(`${this.url}?index=${type}`);
      console.log('Bpooooom',response);
      return response.json();
    } catch (error) {
      console.err(error);
      return error;
    }
  }
}
