import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAplikasiPageRoutingModule } from './info-aplikasi-routing.module';

import { InfoAplikasiPage } from './info-aplikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAplikasiPageRoutingModule
  ],
  declarations: [InfoAplikasiPage]
})
export class InfoAplikasiPageModule {}
