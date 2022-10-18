import { CryptoService } from './../services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css'],
})
export class CryptoDetailsComponent implements OnInit {
  coinData: any;
  coinId!: string;
  currency: string = 'EUR';

  constructor(
    private service: CryptoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.coinId = val['id'];
    });
    this.getCoinData();
    this.service.getCurrency(this.currency).subscribe((val) => {
      // this.currency = val;

      this.getCoinData();
    });
  }

  getCoinData() {
    this.service.getCurrencyById(this.coinId).subscribe((res) => {
      this.coinData = res;
      console.log(this.coinData);
    });
  }
}
