import { getCryptos } from './../store/cryptos.selector';
import { Crypto } from './../models/crypto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { onLoadCryptos } from '../store/cryptos.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  val!: string;
  currency: string = 'EUR';
  res!: string;
  response!: any;

  displayedColumns: string[] = ['rank', 'symbol', 'price', 'daily_change'];

  cryptoData$!: Observable<any>;
  dataSource!: MatTableDataSource<Crypto[]>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.cryptoData$ = this.store.select(getCryptos);
    this.store.dispatch(onLoadCryptos());

    // console.log('Drugi log', this.cryptoData$);
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
