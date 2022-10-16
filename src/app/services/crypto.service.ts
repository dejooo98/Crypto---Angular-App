import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  getCurrency(currency: string) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }

  getCurrencyById(coinId: string) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
  }
}
