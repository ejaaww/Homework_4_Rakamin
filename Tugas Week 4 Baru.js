// Membuat array dengan 100 nilai acak antara 1 dan 50
let array = [];
for (let i = 0; i < 100; i++) {
  array.push(Math.floor(Math.random() * 50) + 1);
}

// Membuat dua array untuk nilai genap dan ganjil
let arrayGenap = [];
let arrayGanjil = [];

for (let i = 0; i < array.length; i++) {
  (i % 2 === 0 ? arrayGenap : arrayGanjil).push(array[i]);
}

// Menghitung Min, Max, Total, dan Rata-rata
const hitungStatistik = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const total = arr.reduce((acc, val) => acc + val, 0);
  const rataRata = total / arr.length;
  return { min, max, total, rataRata };
};

// Menghitung statistik untuk array genap dan ganjil
const statistikGenap = hitungStatistik(arrayGenap);
const statistikGanjil = hitungStatistik(arrayGanjil);

// Menentukan perbandingan statistik
const perbandingan = {
  min: statistikGenap.min > statistikGanjil.min ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil',
  max: statistikGenap.max > statistikGanjil.max ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil',
  total: statistikGenap.total === statistikGanjil.total ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total memiliki nilai berbeda antara array genap dan ganjil',
  rataRata: statistikGenap.rataRata > statistikGanjil.rataRata ? 'Rata-rata lebih besar array genap' : 'Rata-rata lebih besar array ganjil',
};

// Menampilkan output
console.log('- Array dengan jumlah index 100:', array);
console.log('- Array genap dengan jumlah index 50:', arrayGenap);
console.log('- Array ganjil dengan jumlah index 50:', arrayGanjil);
console.log('- Min, Max, Total, Rata rata pada array genap:', statistikGenap);
console.log('- Min, Max, Total, Rata rata pada array ganjil:', statistikGanjil);
console.log('- Perbandingan nilai:', perbandingan);
