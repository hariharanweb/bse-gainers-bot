const interestingStocks = [
  'INFY',
  'IDFCFIRSTB',
  'HDFCBANK',
  'ITC',
  'HCLTECH',
  'TCS',
  'TECHM',
  'TATAMOTORS',
  'INDUSINDBK',
  'SBIN',
  'RELIANCE',
  'CIPLA',
  'CANBK',
  'DRREDDY',
  'KOTAKBANK',
  'TATAMTRDVR',
  'TVSMOTOR',
  'YESBANK',
  'SOUTHBANK',
];

const isInterestingStock = (entry) => interestingStocks.indexOf(entry.scripname) >= 0;

export default {
  isInterestingStock,
};
