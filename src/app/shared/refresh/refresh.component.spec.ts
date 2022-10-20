import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RefreshComponent } from './refresh.component';

describe('RefreshComponent', () => {
  let component: RefreshComponent;
  let fixture: ComponentFixture<RefreshComponent>;
  let matSnackBar: MatSnackBar;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [matSnackBar],
      declarations: [RefreshComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cpen snack bar', () => {
    component.refreshData();
    expect(component.openSnackBar).toBeTrue();
  });
});
