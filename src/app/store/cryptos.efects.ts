import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CryptoService } from '../services/crypto.service';
import { of, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { loadCryptosSuccess, onLoadCryptos } from './cryptos.action';
@Injectable()
export class CryptoEffects {
  constructor(
    private actions$: Actions,
    private cryptoService: CryptoService
  ) {}
  currency: string = 'EUR';
  coinId: any;

  loadCryptos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(onLoadCryptos),
      mergeMap((action) => {
        return this.cryptoService.getCurrency(this.currency).pipe(
          map((cryptos) => {
            // console.log(cryptos);
            return loadCryptosSuccess({ cryptos });
          })
        );
      })
    );
  });

  // loadCryptosDetails$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(onLoadCryptos),
  //     mergeMap((action) => {
  //       return this.cryptoService.getCurrencyById(this.coinId).pipe(
  //         map((id) => {
  //           // console.log(id);
  //           return loadCryptosSuccess({ id });
  //         })
  //       );
  //     })
  //   );
  // });
}
