import { Crypto } from './../models/crypto.model';
import { createReducer, on } from '@ngrx/store';
import { getCoin, retrievedCoinList } from './cryptos.action';

export const initialState: ReadonlyArray<Crypto> = [];

export const coinReducer = createReducer(
  initialState,
  on(getCoin, (state, { coinId }) => coinId),
  on(retrievedCoinList, (state, { coins }) => coins)
);
