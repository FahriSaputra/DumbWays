const urutKata = (kata) => {
  //merubah kata menjadi array
  const kataToArr = kata.split(" ");
  const temp = [];

  for (let i = 0; i <= kataToArr.length - 1; i++) {
    for (let j = 0; j <= kataToArr[i].length - 1; j++) {
      //melakukan pengecekan angka didalam array
      if (!isNaN(kataToArr[i][j])) {
        //menyimpan dalam variable temp dengan format array 2D [[angka yang terdapat didalam kata, kata]]
        temp.push([kataToArr[i][j], kataToArr[i]]);
      }
    }
  }

  //melakukan sort terhadap variable array  dan mengembalikan kata
  const hasil = temp.sort().map((item) => {
    const hasilSort = [];
    hasilSort.push(item[1]);
    return hasilSort;
  });

  return hasil.join(" ");
};

console.log(urutKata("ib2u in1i b3udi"));
