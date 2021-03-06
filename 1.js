/*Buatlah sebuah function sederhana untuk menghitung potongan harga, biaya yang harus dibayar, dan total kembalian pada sistem voucher DumbWays Klontong , ketentuan : 

Voucher :
DumbWaysJos, potongan 21,1%, minimal uang belanja 50000, Maksimal diskon 20000
DumbWaysMantap, potongan 30%, minimal uang belanja 80000, maksimal diskon 40000

Clue : maka jika function dijalankan:
hitungVoucher(DumbWaysJos, 100000)

output :
Uang yang harus dibayar : 80000
Diskon : 20000
Kembalian : 20000*/

const hitungVoucher = (voucher, bayar) => {
  let diskon = 0;

  switch (voucher) {
    case "DumbWaysJos":
      if (bayar >= 50000) {
        (diskon = bayar / 21), 1;
      }

      if (diskon > 20000) {
        diskon = 20000;
      }
      break;
    case "DumbWaysMantap":
      if (bayar >= 80000) {
        diskon = bayar / 30;
      }

      if (diskon > 40000) {
        diskon = 40000;
      }
      break;
  }
  console.log(`
  Uang Yang Harus di bayar = ${bayar - diskon}
  Diskon : ${diskon}
  Kembalian : ${diskon}
  `);
};

console.log(hitungVoucher("DumbWaysMantap", 10000000));
