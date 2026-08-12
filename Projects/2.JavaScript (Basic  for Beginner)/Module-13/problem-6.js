// Problem- 6 : Count vowel in a string

// without function ---

let str = "programming Hero";

let vowels = "aeiou";

let count = 0; // for count how many vowels count in the string loop >>
for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  console.log(i, ">>", letter);
  if (vowels.includes(letter)) {
    console.log(letter, "vowel");
    count++;
  }
}
console.log("Count Vowel : ", count);



console.log('____________USing Function ___________________');

// with Function :

function countVowel(strs) {
  let vowels = "aeiou";

  let count = 0; // for count how many vowels count in the string loop >>
  for (let i = 0; i < strs.length; i++) {
    let letter = strs[i];
    console.log(i, ">>", letter);
    if (vowels.includes(letter)) {
      console.log(letter, "vowel");
      count++;
    }
  }
  console.log("Count Vowel : ", count);

  return count;
}
console.log(countVowel('Programing Zero'));