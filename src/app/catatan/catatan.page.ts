import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-catatan',
  templateUrl: './catatan.page.html',
  styleUrls: ['./catatan.page.scss'],
  standalone: false
})
export class CatatanPage implements OnInit {
  catatanList: any[] = [];

  constructor(
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.loadCatatan();
  }

  ionViewWillEnter() {
    this.loadCatatan();
  }

  async loadCatatan() {
    this.catatanList = await this.storageService.get('catatan') || [];
  }

  async tambahCatatan() {
    const alert = await this.alertCtrl.create({
      header: 'Catatan Baru',
      inputs: [
        {
          name: 'isi',
          type: 'text',
          placeholder: 'Tuliskan catatan Anda di sini...'
        }
      ],
      buttons: [
        {
          text: 'BATAL',
          role: 'cancel'
        },
        {
          text: 'SIMPAN',
          handler: async (data) => {
            if (data.isi) {
              const item = {
                id: Date.now(),
                isi: data.isi,
                tanggal: new Date().toLocaleString('id-ID', {
                  day: 'numeric', month: 'short', year: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                }).replace(':', '.')
              };
              this.catatanList.unshift(item);
              await this.storageService.set('catatan', this.catatanList);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async hapusCatatan(id: number) {
    this.catatanList = this.catatanList.filter(c => c.id !== id);
    await this.storageService.set('catatan', this.catatanList);
    const toast = await this.toastCtrl.create({
      message: 'Catatan dihapus.',
      duration: 1500,
      color: 'dark'
    });
    toast.present();
  }

  async hapusSemua() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Semua',
      message: 'Anda yakin ingin menghapus semua catatan?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        { 
          text: 'Hapus', 
          role: 'destructive',
          handler: async () => {
            this.catatanList = [];
            await this.storageService.remove('catatan');
          }
        }
      ]
    });
    await alert.present();
  }
}
