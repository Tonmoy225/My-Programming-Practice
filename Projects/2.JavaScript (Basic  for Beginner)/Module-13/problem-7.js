// Problem 7 : Check if a String  is a palindrome

let str = "madam";

let reverseWord = "";

console.log(str[10]);

let letter = 0;

for (let i = str.length - 1; i >= 0; i--) {
  let letter = str[i];
  console.log(i, ">>", str[i]);
  reverseWord = reverseWord + letter;
}

if (str === reverseWord) {
  console.log("Palindrom");
} else {
  console.log("Not a palindrom");
}
console.log("The Reversed Word :", reverseWord);

//----USing Function to implement :

console.log("-------------Using Function --------------------");

function isPalindrom(sTr) {
  let reverseWord = "";



  let letter = 0;

  for (let i = sTr.length - 1; i >= 0; i--) {
    let letter = sTr[i];
    console.log(i, ">>", sTr[i]);
    reverseWord = reverseWord + letter;
  }

  if (str === reverseWord) {
    return true;
  } else {
    return false;
  }

  return reverseWord;
}

console.log(isPalindrom("amma"));
