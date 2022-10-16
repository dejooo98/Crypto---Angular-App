import { getCoin } from './../store/cryptos.action';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptoService } from '../services/crypto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Crypto } from '../models/crypto.model';
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

  displayedColumns: string[] = ['rank', 'symbol', 'price', 'daily_change'];
  dataSource!: MatTableDataSource<Crypto>;

  coin$!: Observable<any>;

  constructor(
    private router: Router,
    private service: CryptoService,
    private store: Store<{ coin: Crypto }>
  ) {
    this.coin$ = store.select('coin');
  }

  loadCoins(coinId: string) {
    this.store.dispatch(getCoin({ coinId }));
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.service.getCurrency(this.currency).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
