import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KalkulatorPage } from './kalkulator.page';

describe('KalkulatorPage', () => {
  let component: KalkulatorPage;
  let fixture: ComponentFixture<KalkulatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KalkulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
