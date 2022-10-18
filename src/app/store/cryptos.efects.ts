import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CryptoService } from '../services/crypto.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import {
  loadCryptosFailure,
  loadCryptosSuccess,
  onLoadCryptos,
} from './cryptos.action';
@Injectable()
export class CryptoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private cryptoService: CryptoService
  ) {}
  currency: string = 'EUR';
  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(onLoadCryptos),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.cryptoService.getCurrency(this.currency)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((cryptos) => this.logCrypto({ cryptos: cryptos })),
          map((cryptos) => loadCryptosSuccess({ cryptos: cryptos })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadCryptosFailure({ error })))
        )
      )
    )
  );
  logCrypto(cryptos: any) {
    console.log('Crypto data' + cryptos);
    return cryptos;
  }
}
