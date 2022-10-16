import { createAction, props } from '@ngrx/store';
import { Coin } from '../models/crypto.model';

export const getCoin = createAction(
  '[Crypto List] Add Coin',
  props<{ coinId: string }>()
);

export const retrievedCoinList = createAction(
  '[Crypto List/API] Retrieve Coins Success',
  props<{ coins: ReadonlyArray<Coin> }>()
);
