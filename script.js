function isEven(number) {
  return number % 2 === 0;
}

function printRange(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

printRange(3, 8);
// Output:
// 3
// 4
// 5
// 6
// 7
// 8

function calcFunc(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}
