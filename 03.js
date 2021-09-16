const arkFood = (harga, voucher, jarak, pajak) => {
  const kenaHarga = harga;
  console.log(`Harga : ${kenaHarga}`);

  const kenaPotongan = menghitungPotongan(harga, voucher);
  console.log(`Potongan : ${kenaPotongan}`);

  const kenaOngkir = menghitungOngkir(jarak);
  console.log(`Biaya antar : ${kenaOngkir}`);

  const kenaPajak = menghitungPajak(harga, pajak);
  console.log(`Pajak : ${kenaPajak}`);

  const total = kenaHarga - kenaPotongan + kenaOngkir + kenaPajak;
  console.log(`Subtotal : ${total}`);
};

const menghitungPotongan = (harga, voucher) => {
  if (voucher === "ARKAFOOD5") {
    if (harga < 50000) {
      return "Belum memenuhi belanja minimum";
    } else if (harga >= 50000) {
      let diskon1 = (harga * 50) / 100;
      if (diskon1 > 50000) {
        return 50000;
      } else {
        return diskon1;
      }
    }
  }
  if (voucher === "DITRAKTIRDEMY") {
    if (harga < 25000) {
      return "Belum memenuhi belanja minimum";
    } else if (harga >= 25000) {
      let diskon2 = (harga * 60) / 100;
      if (diskon2 > 30000) {
        return 30000;
      } else {
        return diskon2;
      }
    }
  }
  else {
    return 0;
  }
};
const menghitungOngkir = (jarak) => {
  if (jarak > 2) {
    return (jarak - 2) * 3000 + 5000;
  } else {
    return 5000;
  }
};

const menghitungPajak = (harga, pajak) => {
  if (pajak === true) {
    return (harga * 5) / 100;
  } else {
    return 0;
  }
};

arkFood(75000, "ARKAFOOD5", 5, true);
