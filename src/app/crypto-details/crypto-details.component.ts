import { Crypto } from './../models/crypto.model';
import { CryptoService } from './../services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
// import { Store } from '@ngrx/store';
// import { AppState } from '../store/app.state';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css'],
})
export class CryptoDetailsComponent implements OnInit {
  coinData: any;
  coinId!: string;
  currency: string = 'EUR';

  crypto$!: Observable<Crypto>;

  constructor(
    private cryptoService: CryptoService,
    private activatedRoute: ActivatedRoute, // private store: Store<AppState>
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    // this.store.dispatch(getCoinDetail());
    // this.crypto$ = store.select(onLoadCryptosDetails);
    //
    this.activatedRoute.params.subscribe((val) => {
      this.coinId = val['id'];
      // console.log(this.coinId);
    });
    this.getCoinData();
    this.currencyService.getCurrencyValut().subscribe((val) => {
      this.currency = val as any;
      this.getCoinData();
    });
  }

  getCoinData() {
    this.cryptoService.getCurrencyById(this.coinId).subscribe((res) => {
      // console.log(this.coinData);

      if (this.currency === 'USD') {
        res.market_data.current_price.eur = res.market_data.current_price.usd;
        res.market_data.current_price.cny = res.market_data.current_price.usd;

        res.market_data.market_cap.eur = res.market_data.market_cap.usd;
        res.market_data.market_cap.cny = res.market_data.market_cap.usd;
      } else if (this.currency === 'EUR') {
        res.market_data.current_price.usd = res.market_data.current_price.eur;
        res.market_data.current_price.cny = res.market_data.current_price.eur;

        res.market_data.market_cap.usd = res.market_data.market_cap.eur;
        res.market_data.market_cap.cny = res.market_data.market_cap.eur;
      } else {
        res.market_data.current_price.usd = res.market_data.current_price.cny;
        res.market_data.current_price.eur = res.market_data.current_price.cny;

        res.market_data.market_cap.usd = res.market_data.market_cap.cny;
        res.market_data.market_cap.eur = res.market_data.market_cap.cny;
      }
      this.coinData = res;
    });
  }
}
