import { getCryptos } from './../store/cryptos.selector';
import { Crypto } from './../models/crypto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptoService } from '../services/crypto.service';
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

  // cryptoData$ = this.store.select(selectAllCryptos as any);
  cryptoData$!: Observable<any>;
  dataSource!: MatTableDataSource<Crypto[]>;

  constructor(
    private router: Router,
    private service: CryptoService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.cryptoData$ = this.store.select(getCryptos);
    this.store.dispatch(onLoadCryptos());
    // this.dataSource = new MatTableDataSource(this.cryptoData$);

    console.log('Drugi log', this.cryptoData$);

    // this.service.getCurrency(this.currency).subscribe((res) => {
    //   this.dataSource = new MatTableDataSource(res);
    // });
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
