const arr1 = [1, 2, 3, 4, 5];
const ar2 = [7, 8, 9, 11, 12, 4];

// function identicalEl(arr, ar) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < ar.length; j++) {
//       if (arr[i] === ar[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// Time complexity = O(a*b) because it is a nested loop
// space complexity = O(1) because we are not adding a new variable
function identicalEl2(arr, ar) {
  let container = {};
  // looping through the first array to create object where properties===items in the array
  for (let i = 0; i < arr.length; i++) {
    if (!container[arr[i]]) {
      const element = arr[i];
      container[element] = true;
    }
  }
  let firstIndex = arr[j];
  for (let j = 0; j < ar.length; j++) {
    if (container[ar[j]]) {
      return true;
    }
  }
  return false;
}
// Time complexity = O(a + b) so this is better
// space comlexity is O(a) beecause we created a new object

// console.log(identicalEl2(arr1, ar2));

function identicalEl3(arr, ar) {
  return arr1.some((items) => ar2.includes(items));
}
console.log(identicalEl3(arr1, ar2));
