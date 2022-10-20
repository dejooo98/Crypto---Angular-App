import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onLoadCryptos } from 'src/app/store/cryptos.action';
import { getCryptos } from 'src/app/store/cryptos.selector';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css'],
})
export class RefreshComponent implements OnInit {
  cryptoData$!: Observable<any>;
  dataSource!: MatTableDataSource<Crypto[]>;

  isTableLoading = false;
  updateDate!: Date;
  lastUpdated!: string;
  refreshInterval!: Observable<number>;

  constructor(public snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    this.getAllData();
    this.refreshData();
  }

  getAllData() {
    this.cryptoData$ = this.store.select(getCryptos);
    this.store.dispatch(onLoadCryptos());
    // console.log('Drugi log', this.cryptoData$);
  }

  ngOnDestroy() {
    document.removeEventListener('visibilitychange', this.refreshOnVisible);
  }

  refreshData() {
    this.isTableLoading = true;
    this.getAllData();
    this.updateDate = new Date();
    this.isTableLoading = false;
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
}
