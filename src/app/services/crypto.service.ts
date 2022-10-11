import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  // api =
  //   'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD';
  // // coinMarketCapApiKey = 'c2b08731-f03a-400c-8311-c6a2ea843891';
  // constructor(private http: HttpClient) {}
  // getAllCoinsListing() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'X-CMC_PRO_API_KEY': 'c2b08731-f03a-400c-8311-c6a2ea843891',
  //       'Access-Control-Allow-Origin': 'http://localhost:4100',
  //     }),
  //   };
  //   return this.http.get(this.api, httpOptions);
  // }
}
