<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
{
    // Variabel untuk menyimpan suhu
var suhu = 50; // Ganti angka ini dengan suhu yang ingin Anda uji

// Variabel untuk menyimpan jenis kendaraan
var platKuning = false; // true jika kendaraan memiliki plat kuning, false jika tidak
var motor = false; // true jika kendaraan adalah motor, false jika tidak
var mobilCC = 1600; // Kapasitas CC mobil, ganti angka ini sesuai dengan kendaraan yang Anda uji

// Implementasi logika untuk kondisi air
if (suhu >= -100 && suhu <= 0) {
  console.log("Air dalam kondisi beku");
} else if (suhu >= 1 && suhu <= 100) {
  console.log("Air dalam kondisi cair");
} else if (suhu >= 101 && suhu <= 500) {
  console.log("Air dalam kondisi uap");
} else {
  console.log("Suhu tidak terdefinisi");
}

// Implementasi logika untuk SPBU
if (platKuning || motor) {
  console.log("Gunakan BBM subsidi");
} else if (mobilCC < 1500) {
  console.log("Gunakan PERTAMAX");
} else {
  console.log("Gunakan PERTAMAX Turbo");
}
}