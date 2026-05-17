import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.page.html',
  styleUrls: ['./kalkulator.page.scss'],
  standalone: false
})
export class KalkulatorPage {
  hargaAwalStr: string = '';
  diskonPersenStr: string = '';
  mataUang: string = 'Rp';

  potongan: number = 0;
  hargaAkhir: number = 0;

  constructor(private storageService: StorageService, private toastCtrl: ToastController) {}

  get hargaAwal(): number | null {
    if (!this.hargaAwalStr) return null;
    return parseFloat(this.hargaAwalStr.replace(/\./g, '').replace(',', '.')) || 0;
  }

  get diskonPersen(): number | null {
    if (!this.diskonPersenStr) return null;
    return parseFloat(this.diskonPersenStr.replace(/\./g, '').replace(',', '.')) || 0;
  }

  onHargaChange(event: any) {
    let val = event.target.value;
    if (!val) {
      this.hargaAwalStr = '';
      return;
    }
    // Remove non-digit characters
    val = val.replace(/[^0-9]/g, '');
    if (val) {
      this.hargaAwalStr = parseInt(val, 10).toLocaleString('id-ID');
    } else {
      this.hargaAwalStr = '';
    }
    event.target.value = this.hargaAwalStr;
  }

  onDiskonChange(event: any) {
    let val = event.target.value;
    if (!val) {
      this.diskonPersenStr = '';
      return;
    }
    // Allow digits and comma/dot for decimal
    val = val.replace(/[^0-9.,]/g, '');
    val = val.replace(/\./g, ','); // Standardize decimal separator internally to comma
    
    let parts = val.split(',');
    let intPart = parts[0].replace(/[^0-9]/g, '');
    let formatted = intPart ? parseInt(intPart, 10).toString() : '';
    
    if (parts.length > 1) {
      formatted += ',' + parts[1]; // Use comma for decimal in display
    }
    this.diskonPersenStr = formatted;
    event.target.value = this.diskonPersenStr;
  }

  setDiskon(val: number) {
    this.diskonPersenStr = val.toString().replace(/\./g, ',');
  }

  async hitung() {
    if (this.hargaAwal == null || this.diskonPersen == null) {
      const toast = await this.toastCtrl.create({
        message: 'Mohon isi harga awal dan diskon terlebih dahulu.',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    this.potongan = (this.hargaAwal * this.diskonPersen) / 100;
    this.hargaAkhir = this.hargaAwal - this.potongan;

    await this.simpanKeRiwayat();
  }

  reset() {
    this.hargaAwalStr = '';
    this.diskonPersenStr = '';
    this.potongan = 0;
    this.hargaAkhir = 0;
    this.mataUang = 'Rp';
  }

  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(value);
  }

  async simpanKeRiwayat() {
    let riwayat = await this.storageService.get('riwayat') || [];
    
    const item = {
      id: Date.now(),
      tanggal: new Date().toLocaleString('id-ID', {
        day: 'numeric', month: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }).replace(/\./g, ':'),
      hargaAwal: this.hargaAwal,
      diskonPersen: this.diskonPersen,
      potongan: this.potongan,
      hargaAkhir: this.hargaAkhir,
      mataUang: this.mataUang
    };

    riwayat.unshift(item);
    await this.storageService.set('riwayat', riwayat);

    const toast = await this.toastCtrl.create({
      message: 'Perhitungan disimpan ke riwayat.',
      duration: 1500,
      color: 'success'
    });
    toast.present();
  }
}
