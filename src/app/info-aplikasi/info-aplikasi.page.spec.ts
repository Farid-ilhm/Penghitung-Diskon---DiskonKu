import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoAplikasiPage } from './info-aplikasi.page';

describe('InfoAplikasiPage', () => {
  let component: InfoAplikasiPage;
  let fixture: ComponentFixture<InfoAplikasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAplikasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
