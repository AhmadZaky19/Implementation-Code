const teks = "malam";
let x = teks.length - 1;
let teksTerbalik = "";

if (typeof teks !== "string") {
  console.log("Bukan String")

} else {
  while (x >= 0) {
    teksTerbalik += teks[x]
    x = x - 1
  }
  // console.log(teksTerbalik)

  if (teks.toLowerCase() === teksTerbalik.toLowerCase()) {
    console.log("Palindrom")
  } else {
    console.log("Bukan Palindrom")
  }
}