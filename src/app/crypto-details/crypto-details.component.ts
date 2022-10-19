import { Crypto } from './../models/crypto.model';
import { CryptoService } from './../services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

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
    private service: CryptoService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
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
    this.service.getCurrency(this.currency).subscribe((val) => {
      this.currency = val as any;
      this.getCoinData();
    });
  }

  getCoinData() {
    this.service.getCurrencyById(this.coinId).subscribe((res) => {
      // console.log(this.coinData);
      this.coinData = res;
    });
  }
}
