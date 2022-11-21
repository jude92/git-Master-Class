function firstRepeat(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // // fime complexity is O(n^2)


function firstRepeat2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}
// console.log(firstRepeat([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeat2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// fime complexity is O(n)
