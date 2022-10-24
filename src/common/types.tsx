export interface Spread {
  id: number;
  spreadTypeId: number;
  accountId: number;
  symbol: string;
  side: string;
  notionalFrom: number;
  notionalTo: number;
  spreadPercentil: number;
}