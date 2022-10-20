import { ActivatedRoute } from '@angular/router';
import { CryptoService } from './../services/crypto.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDetailsComponent } from './crypto-details.component';

describe('CryptoDetailsComponent', () => {
  let component: CryptoDetailsComponent;
  let fixture: ComponentFixture<CryptoDetailsComponent>;
  let cryptoServiceMock: CryptoService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [cryptoServiceMock, activatedRoute],
      declarations: [CryptoDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
