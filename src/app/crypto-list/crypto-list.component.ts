import { CryptoService } from './../services/crypto.service';
import { getCryptos } from './../store/cryptos.selector';
import { Crypto } from './../models/crypto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { onLoadCryptos } from '../store/cryptos.action';
import { Observable } from 'rxjs';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  currency: string = 'EUR';
  coinId!: string;

  //podaci za tabelu
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'daily_change'];
  cryptoData$!: Observable<any>;
  dataSource!: MatTableDataSource<any>;
  dataSources!: MatTableDataSource<any>;

  constructor(
    private router: Router,
    private store: Store,
    private currencyService: CurrencyService,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.getAllData();
    // this.getCryptosValut();
    this.currencyService.getCurrencyValut().subscribe((val) => {
      this.currency = val;
      // this.getCryptosValut();
    });
  }

  // getCryptosValut() {
  //   this.cryptoService.getCurrency(this.currency).subscribe((res) => {
  //     this.dataSources = new MatTableDataSource(res);
  //   });
  // }

  getAllData() {
    this.cryptoData$ = this.store.select(getCryptos);
    this.store.dispatch(onLoadCryptos());
    // console.log('Drugi log', this.cryptoData$);
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
