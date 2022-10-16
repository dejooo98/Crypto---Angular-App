import { Coin } from './../models/crypto.model';
import { createReducer, on } from '@ngrx/store';
import { retrievedCoinList } from './cryptos.action';

export const initialState: ReadonlyArray<Coin> = [];

export const coinReducer = createReducer(
  initialState,
  on(retrievedCoinList, (state, { coins }) => coins)
);
