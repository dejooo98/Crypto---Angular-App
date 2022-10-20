import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;
  let httpMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoService],
      providers: [service, { provide: HttpClient, useValue: httpMock }],
    });

    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
