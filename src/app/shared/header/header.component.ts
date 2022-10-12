import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() homeButtonClicked: EventEmitter<void> = new EventEmitter();
  @Output() settingsButtonClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  homeButtonClickedEvent(): void {
    this.homeButtonClicked.next();
  }

  settingsButtonClickedEvent(): void {
    this.settingsButtonClicked.next();
  }
}
