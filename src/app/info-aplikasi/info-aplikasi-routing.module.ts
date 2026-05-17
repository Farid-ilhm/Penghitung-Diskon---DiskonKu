import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAplikasiPage } from './info-aplikasi.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAplikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAplikasiPageRoutingModule {}
