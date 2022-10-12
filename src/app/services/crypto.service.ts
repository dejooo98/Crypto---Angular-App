import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  coinMarketCapApiKey = 'c2b08731-f03a-400c-8311-c6a2ea843891';
  api =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD';
  // api =
  //'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=c2b08731-f03a-400c-8311-c6a2ea843891';
  constructor(private http: HttpClient) {}
  getAllCoinsListing() {
    const httpOptions = {
      headers: new HttpHeaders({
        CMC_PRO_API_KEY: 'c2b08731-f03a-400c-8311-c6a2ea843891',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      }),
    };

    return this.http.get(this.api, httpOptions);
  }
}
