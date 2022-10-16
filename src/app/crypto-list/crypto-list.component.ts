import { getCoin } from './../store/cryptos.action';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptoService } from '../services/crypto.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  val: any;
  currency: string = 'EUR';
  res: any;

  displayedColumns: string[] = ['rank', 'symbol', 'price', 'daily_change'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private router: Router,
    private service: CryptoService,
    private store: Store
  ) {}

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
