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
];

const isInterestingStock = (entry) => interestingStocks.indexOf(entry.scripname) >= 0;

export default {
  isInterestingStock,
};
