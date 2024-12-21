function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let leftArray = array.slice(0, Math.floor(array.length / 2));
    let rightArray = array.slice(Math.floor(array.length / 2, array.length));

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
  }
}

let test = [2, 7, 3, 6, 5, 1, 4, 13, 51, 511, 12, 13];

function merge(leftArray, rightArray) {
  let outputArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      outputArray.push(rightArray[0]);
      rightArray.shift();
    } else {
      outputArray.push(leftArray[0]);
      leftArray.shift();
    }
  }
  while (leftArray.length) {
    outputArray.push(leftArray[0]);
    leftArray.shift();
  }

  while (rightArray.length) {
    outputArray.push(rightArray[0]);
    rightArray.shift();
  }

  return outputArray;
}

console.log(mergeSort(test));
