import { createAction, props } from '@ngrx/store';

export const onLoadCryptos = createAction('[Crypto List] List Cryptos');

export const loadCryptosSuccess = createAction(
  '[Crypto API] Crypto Load Success',
  props<{ cryptos: any }>()
);

export const loadCryptosFailure = createAction(
  '[Crypto API] Crypto Load Failure',
  props<{ error: string }>()
);

export const onLoadCryptosDetails = createAction(
  '[Crypto Details]  Detail Crypto'
);
