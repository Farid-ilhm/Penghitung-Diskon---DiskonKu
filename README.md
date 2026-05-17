# 🛒 DiskonKu

<div align="center">
  <img src="src/assets/logo-diskonku.png" alt="Logo DiskonKu" width="120" />
  <br/>
  <h3>Aplikasi Kalkulator Diskon Pintar & Multimata Uang</h3>
  <p>Tugas Project Kampus - Dibangun dengan Ionic Angular & Capacitor</p>
</div>

---

## 📖 Tentang Project

**DiskonKu** adalah aplikasi mobile praktis yang dirancang untuk memudahkan pengguna dalam menghitung potongan harga (diskon) secara cepat dan akurat. Tidak hanya sekadar kalkulator diskon biasa, aplikasi ini dilengkapi dengan fitur penyimpanan riwayat perhitungan, pencatatan barang belanjaan, serta dukungan untuk berbagai jenis mata uang asing.

Project ini dikembangkan sebagai pemenuhan **Tugas Kampus** menggunakan teknologi pengembangan aplikasi *hybrid* modern.

## ✨ Fitur Utama

- 🧮 **Kalkulator Diskon**: Hitung harga akhir dan besar potongan harga dengan cepat dan presisi (mendukung nilai desimal).
- ⚡ **Tombol Diskon Cepat**: Tersedia *preset* diskon praktis (10%, 20%, 50%) untuk mempercepat perhitungan dengan sekali klik.
- 🌍 **Multimata Uang**: Mendukung perhitungan dalam Rupiah (Rp), Dollar ($), Yen (¥), dan Ringgit (RM).
- 📜 **Riwayat Perhitungan**: Secara otomatis menyimpan riwayat perhitungan agar bisa dilihat kembali nanti tanpa perlu menghitung ulang.
- 📝 **Catatan**: Fitur terintegrasi untuk mencatat barang-barang yang ingin dibeli (*Wishlist/Shopping Notes*).
- 📱 **Native-Feel Navigation**: Penanganan tombol *back* pada perangkat fisik (Hardware Back Button) yang optimal layaknya aplikasi *native* asli.

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan *stack* teknologi berikut:

- **[Ionic Framework](https://ionicframework.com/)** (v8) - UI Toolkit berkinerja tinggi untuk aplikasi mobile.
- **[Angular](https://angular.dev/)** - Framework utama untuk mengelola logika, routing, dan komponen aplikasi.
- **[Capacitor](https://capacitorjs.com/)** - *Native runtime* untuk mengubah kode web menjadi aplikasi *mobile* sejati (Android/iOS).
- **Ionic Storage Angular** - Digunakan untuk penyimpanan data riwayat dan catatan secara lokal (*local storage/SQLite*).

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi di perangkat/laptop Anda:

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/) (versi LTS terbaru)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)

### 2. Instalasi
*Clone repository* ini dan masuk ke dalam folder *project*:
```bash
git clone https://github.com/USERNAME_GITHUB_ANDA/DiskonKu.git
cd DiskonKu
npm install
```

### 3. Menjalankan di Browser (Mode Development)
Untuk menjalankan aplikasi secara lokal dan melihatnya di *browser*:
```bash
ionic serve
```

### 4. Build untuk Android (Menggunakan Capacitor)
Jika Anda ingin mengompilasi aplikasi ini ke dalam format APK untuk HP Android:
```bash
ionic build
npx cap sync android
npx cap open android
```
*(Catatan: Anda harus sudah memiliki Android Studio yang terinstal di komputer untuk membuka dan mem-build project Android-nya)*

## 📂 Struktur Navigasi Aplikasi

Aplikasi ini menggunakan struktur menu navigasi berbasis *tabs* di bagian bawah layar:
1. **Kalkulator**: Layar utama operasional untuk menghitung diskon.
2. **Catatan**: Tempat menyimpan catatan daftar barang belanjaan Anda.
3. **Riwayat**: Menampilkan rentetan histori perhitungan diskon yang telah dilakukan sebelumnya.
4. **Info Aplikasi**: Menampilkan halaman informasi singkat seputar aplikasi dan tim/kreator pembuatnya.

---
<div align="center">
  Dibuat dengan ❤️ untuk pemenuhan Tugas Project Kampus.
</div>
