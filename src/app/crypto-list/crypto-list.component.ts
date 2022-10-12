import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

export interface PeriodicElement {
  rank: number;
  symbol: string;
  price: number;
  daily_change: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { rank: 1, symbol: 'Hydrogen', price: 1.0079, daily_change: 'H' },
  { rank: 2, symbol: 'Helium', price: 4.0026, daily_change: 'He' },
  { rank: 3, symbol: 'Lithium', price: 6.941, daily_change: 'Li' },
  { rank: 4, symbol: 'Beryllium', price: 9.0122, daily_change: 'Be' },
  { rank: 5, symbol: 'Boron', price: 10.811, daily_change: 'B' },
  { rank: 6, symbol: 'Carbon', price: 12.0107, daily_change: 'C' },
  { rank: 7, symbol: 'Nitrogen', price: 14.0067, daily_change: 'N' },
  { rank: 8, symbol: 'Oxygen', price: 15.9994, daily_change: 'O' },
  { rank: 9, symbol: 'Fluorine', price: 18.9984, daily_change: 'F' },
  { rank: 10, symbol: 'Neon', price: 20.1797, daily_change: 'Ne' },
];

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'daily_change'];
  dataSource = ELEMENT_DATA;
  val: any;

  constructor(private router: Router, private service: CryptoService) {}

  ngOnInit(): void {
    this.service.getAllCoinsListing().subscribe((data) => {
      data = this.val;
      console.log(data);
    });
  }

  gotoDetails(row: any) {
    this.router.navigate(['coin-details', row.id]);
  }
}
