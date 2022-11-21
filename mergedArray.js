function mergedSorted(arr, ar) {
  let mergedArr = [];
  let arrItem = arr[0];
  let arItem = ar[0];
  let i = 1;
  let j = 1;
  if (arr.length === 0) {
    return ar;
  }
  if (ar.length === 0) {
    return arr;
  }
  while (arrItem || arItem) {
    console.log(arrItem, arItem);
    if (!arItem || arrItem < arItem) {
      mergedArr.push(arrItem);
      arrItem = arr[i];
      i++;
    } else {
      mergedArr.push(arItem);
      arItem = ar[j];
      j++;
    }
  }
  return mergedArr;
}
console.log(mergedSorted([0, 3, 4], [4, 6, 30]));
