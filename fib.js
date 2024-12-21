function fibsRec(n, array = []) {
  if (n === 0) return array;
  else {
    array.unshift(recursion(n));
    return fibsRec(n - 1, array);
  }

  function recursion(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n !== 1 || n !== 2) {
      return recursion(n - 1) + recursion(n - 2);
    }
  }
}

console.log(fibsRec(9));
