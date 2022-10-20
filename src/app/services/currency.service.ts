import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private selectedCurrency$: BehaviorSubject<any> = new BehaviorSubject<string>(
    'EUR'
  );

  constructor() {}

  getCurrencyValut() {
    return this.selectedCurrency$.asObservable();
  }
  setCurrecny(currency: string) {
    this.selectedCurrency$.next(currency);
  }
}
