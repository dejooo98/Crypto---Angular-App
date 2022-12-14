export interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  market_cap_usd: string;
  available_supply: string;
  total_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
}

export enum AvailableCurrencies {
  USD = 'USD',
  EUR = 'EUR',
  CNY = 'CYN',
}

export interface ICurrencyItemType {
  [key: string]: ICurrency;
}

export interface InitSettings {
  uiCurrency: AvailableCurrencies;
}

export const SETTINGS_INIT_STATE: InitSettings = {
  uiCurrency: AvailableCurrencies.USD,
};
export interface ICurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  circulatingSupply: number;
  totalSupply: number;
  rank: number;
  quote: IQuoteType;
}
export interface IQuoteType {
  [key: string]: IQuote;
}
export interface IQuote {
  price: number;
  volumeLast24Hours: number;
  percentChange1Hour: number;
  percentChange24Hours: number;
  percentChange7Days: number;
  marketCapitalization: number;
}

// ///////////////////////////////////////////////////////

export interface Crypto {
  current_price: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  symbol: string;
}

export interface CryptoState {
  cryptos: Crypto[];
  error?: string;
}
