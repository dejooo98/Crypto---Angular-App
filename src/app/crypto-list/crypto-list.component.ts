import { Crypto } from './../models/crypto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptoService } from '../services/crypto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { onLoadCryptos } from '../store/cryptos.action';
import { selectAllCryptos } from '../store/cryptos.effects';

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
  dataSource!: MatTableDataSource<Crypto>;

  cryptoData$ = this.store.select(selectAllCryptos as any);

  constructor(
    private router: Router,
    // private service: CryptoService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.store.dispatch(onLoadCryptos());
    console.log('LOG');
    console.log('Drugi log', this.cryptoData$);

    // this.service.getCurrency(this.currency).subscribe((res) => {
    //   this.dataSource = new MatTableDataSource(res);
    //   console.log('clicked');
    // });
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
