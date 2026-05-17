import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
  standalone: false
})
export class RiwayatPage implements OnInit {
  riwayatList: any[] = [];

  constructor(
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.loadRiwayat();
  }

  ionViewWillEnter() {
    this.loadRiwayat();
  }

  async loadRiwayat() {
    this.riwayatList = await this.storageService.get('riwayat') || [];
  }

  async hapusRiwayat(id: number) {
    this.riwayatList = this.riwayatList.filter(r => r.id !== id);
    await this.storageService.set('riwayat', this.riwayatList);
    const toast = await this.toastCtrl.create({
      message: 'Riwayat dihapus.',
      duration: 1500,
      color: 'dark'
    });
    toast.present();
  }

  async hapusSemua() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Semua',
      message: 'Anda yakin ingin menghapus semua riwayat perhitungan?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        { 
          text: 'Hapus', 
          role: 'destructive',
          handler: async () => {
            this.riwayatList = [];
            await this.storageService.remove('riwayat');
          }
        }
      ]
    });
    await alert.present();
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }
}
