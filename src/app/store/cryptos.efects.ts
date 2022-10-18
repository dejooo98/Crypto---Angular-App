import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CryptoService } from '../services/crypto.service';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
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
    private cryptoService: CryptoService
  ) {}
  currency: string = 'EUR';
  // Run this code when a loadTodos action is dispatched
  // loadCryptos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(onLoadCryptos),
  //     switchMap(() =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.cryptoService.getCurrency(this.currency)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((cryptos) => this.logCrypto({ cryptos: cryptos })),
  //         map((cryptos) => loadCryptosSuccess({ cryptos: cryptos })),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(loadCryptosFailure({ error })))
  //       )
  //     )
  //   )
  // );

  //drugi nacin
  loadCryptos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(onLoadCryptos),
      mergeMap((action) => {
        return this.cryptoService.getCurrency(this.currency).pipe(
          map((cryptos) => {
            console.log(cryptos);
            return loadCryptosSuccess({ cryptos });
          })
        );
      })
    );
  });
}

// logCrypto(cryptos: any) {
//   console.log('Crypto data' + cryptos);
//   return cryptos;
//}
// }
