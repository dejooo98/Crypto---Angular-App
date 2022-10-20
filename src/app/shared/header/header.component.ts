import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() homeButtonClicked: EventEmitter<void> = new EventEmitter();
  selectedCurrency: string = 'EUR';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  sendCurrency(event: string) {
    // console.log(event);
    this.currencyService.setCurrecny(event);
  }

  homeButtonClickedEvent(): void {
    this.homeButtonClicked.next();
  }
}
