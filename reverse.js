function reverse(str) {
  if (!str || str.length < 2 || typeof str != "string") {
    console.log(" invalid string operations");
  }
  const backwards = [];
  const length = str.length - 1;
  for (let i = length; i > 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

// for readability

function reverse2(str) {
  return str.split("").reverse().join("");
}
// str.split() =[...str]
const reverse3 = (str) => [...str].reverse().join("");
console.log(reverse3(" welcome to nairaland "));
