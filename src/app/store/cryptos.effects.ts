import { CryptoState } from './../models/crypto.model';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectCryptos = (state: AppState) => state.cryptos;
export const selectAllCryptos = createSelector(
  selectCryptos,
  (state: CryptoState) => state.cryptos
);
