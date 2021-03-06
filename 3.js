const cetakGambar = (panjang) => {
  let gambar = "";
  const nilaiTengah = Math.ceil(panjang / 2);

  if (panjang % 2 == 0) {
    return console.log("panjang harus ganjil");
  }

  for (let i = 1; i <= panjang; i++) {
    for (let j = 1; j <= panjang; j++) {
      if (j == nilaiTengah || i == nilaiTengah || i + j - 1 == nilaiTengah || j - i + 1 == nilaiTengah || i - j + 1 == nilaiTengah || j + i == nilaiTengah + panjang) {
        gambar += "*";
      } else {
        gambar += " ";
      }
    }
    gambar += "\n";
  }
  return gambar;
};
console.log(cetakGambar(9));
