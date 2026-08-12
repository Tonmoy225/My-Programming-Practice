// Problem-12 : Filter a Numbers Greater than a Value :

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let selectNumber = arr[3];
let store = [];

for (let i = 0; i < arr.length; i++) {
  if (selectNumber < arr[i]) {
    store.push(arr[i]);
  }
  console.log(store);
}

console.log("The Collected Number are : ", store);






// Using Function to cooollect numbers :

console.log('--------------------Usng Function ---------------------------------');







let arrs = [10,20,30,40,50,60,70,90];

function collectNumbers(arr) {
  let selectNumber = arr[3];
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
    if (selectNumber < arr[i]) {
      store.push(arr[i]);
    }
    console.log(store);
  }
  return store;
}
const collectNumber = collectNumbers(arrs);

console.log("The Collected Number using Function are : ", collectNumber);
