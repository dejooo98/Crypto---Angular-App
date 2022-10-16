import { createAction, props } from '@ngrx/store';
import { Crypto } from '../models/crypto.model';

export const getCoin = createAction(
  '[Crypto List] List Cryptos',
  props<{ coinId: any }>()
);

export const retrievedCoinList = createAction(
  '[Crypto List/API] Retrieve Crypto Success',
  props<{ coins: ReadonlyArray<Crypto> }>()
);
