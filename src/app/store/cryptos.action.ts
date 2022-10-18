import { createAction, props } from '@ngrx/store';
import { Crypto } from '../models/crypto.model';

export const onLoadCryptos = createAction('[Crypto List] List Cryptos');

export const loadCryptosSuccess = createAction(
  '[Crypto API] Crypto Load Success',
  props<{ cryptos: any }>()
);

export const loadCryptosFailure = createAction(
  '[Crypto API] Crypto Load Failure',
  props<{ error: string }>()
);
