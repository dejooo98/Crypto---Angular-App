import { getCryptos } from './../store/cryptos.selector';
import { Crypto } from './../models/crypto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptoService } from '../services/crypto.service';
import { MatTableDataSource } from '@angular/material/table';
import { onLoadCryptos } from '../store/cryptos.action';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  isTableLoading = false;
  updateDate!: Date;
  lastUpdated!: string;
  refreshInterval!: Observable<number>;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getAllData();
    this.refreshData();
  }

  getAllData() {
    this.cryptoData$ = this.store.select(getCryptos);
    this.store.dispatch(onLoadCryptos());

    // console.log('Drugi log', this.cryptoData$);
  }

  //REFRESH
  ngOnDestroy() {
    document.removeEventListener('visibilitychange', this.refreshOnVisible);
  }

  refreshData() {
    this.isTableLoading = true;
    this.getAllData();
    this.isTableLoading = false;
    this.updateDate = new Date();
    this.lastUpdated = this.updateDate.toLocaleTimeString();
    this.openSnackBar(`Refreshed: ${this.lastUpdated}`);
  }

  refreshOnVisible = () => {
    if (document.visibilityState === 'visible' && !this.isTableLoading) {
      this.refreshData();
    }
  };

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', { duration: 3000 });
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
