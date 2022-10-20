import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  getCurrency(currency: string): Observable<Crypto[]> {
    return this.http.get<any[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
    //.pipe(
    //   map((data) => {
    //     const cryptos: Crypto[] = [];
    //     for (let key in data) {
    //       cryptos.push({ ...data[key], id: key });
    //     }
    //     return cryptos;
    //   })
    // );
  }

  getCurrencyValut(currency: string) {
    return this.http.get<any[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`
    );
  }
  getCurrencyById(coinId: string) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
  }
}
