import { CryptoService } from './../../services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css'],
})
export class RefreshComponent implements OnInit {
  currency: string = 'EUR';

  isTableLoading = false;
  updateDate!: Date;
  lastUpdated!: string;
  refreshInterval!: Observable<number>;

  constructor(
    private cryptoService: CryptoService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refreshData();
    document.addEventListener('visibilitychange', this.refreshOnVisible);
  }

  ngOnDestroy() {
    document.removeEventListener('visibilitychange', this.refreshOnVisible);
  }

  refreshData() {
    this.isTableLoading = true;
    this.cryptoService.getCurrency(this.currency).subscribe((val) => {
      console.log('Refreshed Data');
    });
    //
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
}
