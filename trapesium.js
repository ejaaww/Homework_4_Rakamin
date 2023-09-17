class Trapesium {
    constructor(panjangAtas, panjangBawah, tinggi, sisiMiring) {
      this.panjangAtas = panjangAtas;
      this.panjangBawah = panjangBawah;
      this.tinggi = tinggi;
      this.sisiMiring = sisiMiring;
    }
  
    hitungKeliling() {
      return this.panjangAtas + this.panjangBawah + 2 * this.sisiMiring;
    }
  
    hitungLuas() {
      return ((this.panjangAtas + this.panjangBawah) * this.tinggi) / 2;
    }
  }
  
  // Contoh penggunaan
  const trapesium1 = new Trapesium(20, 22, 16, 18);
  console.log("Keliling:", trapesium1.hitungKeliling());
  console.log("Luas:", trapesium1.hitungLuas());
  