const divideAndSort = (number) => {
    let numToStr = number.toString().split(0)
    let numbers = numToStr.map((value) => value.split("").sort().join("")).join("")
    return parseInt(numbers)
  }
  console.log(divideAndSort(5956560159466056))
  