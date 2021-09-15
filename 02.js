let words = "Saya Bootcamp di Arkademy"
if (typeof words !== "string") {
  console.log("Bukan String")
} else {
  let array = words.split(" ")
  let wordsNew = array.reverse().join(" ")
  console.log(wordsNew)
}