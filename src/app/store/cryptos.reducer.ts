import { Crypto, CryptoState } from './../models/crypto.model';
import { createReducer, on } from '@ngrx/store';
import {
  loadCryptosFailure,
  loadCryptosSuccess,
  onLoadCryptos,
} from './cryptos.action';

export const initialState: CryptoState = {
  cryptos: [],
};

export const cryptoReducer = createReducer(
  initialState,
  on(onLoadCryptos, (state) => ({ ...state })),

  on(loadCryptosSuccess, (state, { cryptos }) => ({
    ...state,
    cryptos: cryptos,
  })),
  // Handle todos load failure
  on(loadCryptosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
