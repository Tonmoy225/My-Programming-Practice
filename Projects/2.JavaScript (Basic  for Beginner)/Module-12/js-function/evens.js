const numbers = [12, 87, 14, 51, 36, 46];

const even = [];
function evenNumbers(array) {
  for (const num of array) {
    if (num % 2 === 0) {
      console.log("even : ", num);
      even.push(num);
    }
  }
  return even;
}

const evenTotal = evenNumbers(numbers);
console.log(evenTotal);
