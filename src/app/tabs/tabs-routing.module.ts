import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'kalkulator',
        loadChildren: () => import('../kalkulator/kalkulator.module').then(m => m.KalkulatorPageModule)
      },
      {
        path: 'catatan',
        loadChildren: () => import('../catatan/catatan.module').then(m => m.CatatanPageModule)
      },
      {
        path: 'riwayat',
        loadChildren: () => import('../riwayat/riwayat.module').then(m => m.RiwayatPageModule)
      },
      {
        path: 'info-aplikasi',
        loadChildren: () => import('../info-aplikasi/info-aplikasi.module').then(m => m.InfoAplikasiPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/kalkulator',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/kalkulator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
