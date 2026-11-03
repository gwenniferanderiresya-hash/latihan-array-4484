const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// Menampilkan jumlah siswa
console.log("Jumlah siswa:", namaSiswa.length);

// Menampilkan nama dan nilai siswa pertama
console.log("Siswa pertama:", namaSiswa[0], "-", nilaiSiswa[0]);

// Menampilkan nama dan nilai siswa terakhir
console.log(
    "Siswa terakhir:",
    namaSiswa[namaSiswa.length - 1],
    "-",
    nilaiSiswa[nilaiSiswa.length - 1]
);

// Mengubah nilai Budi dari 75 menjadi 88
nilaiSiswa[1] = 88;

// Mengubah nilai Eko dari 70 menjadi 82
nilaiSiswa[4] = 82;

// Menampilkan nama dan nilai siswa ketiga
console.log("Siswa ketiga:", namaSiswa[2], "-", nilaiSiswa[2]);

// Menampilkan seluruh data setelah diperbarui
console.log("Daftar nama siswa:", namaSiswa);
console.log("Daftar nilai siswa:", nilaiSiswa);