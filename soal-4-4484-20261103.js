const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

// Menampilkan jumlah produk
console.log("Jumlah produk:", daftarProduk.length);

// Menampilkan indeks terakhir
console.log("Indeks terakhir:", daftarProduk.length - 1);

// Menampilkan produk terakhir
console.log("Produk terakhir:", daftarProduk[daftarProduk.length - 1]);

// Menampilkan elemen tengah sebelah kiri
console.log("Produk tengah kiri:", daftarProduk[Math.floor((daftarProduk.length - 1) / 2)]);