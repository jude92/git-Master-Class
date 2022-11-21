const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let firstIndex = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = firstIndex;
      }
    }
  }
}
//console.log(bubbleSort(numbers));
//console.log(numbers);

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let firstIndex = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = firstIndex;
  }
  return arr;
}
console.log(selectionSort(numbers));
console.log(numbers);
