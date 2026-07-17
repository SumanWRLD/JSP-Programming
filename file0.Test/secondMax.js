let arr = [10, 20, 41, 33, 16, 25];
let max1 = 0;
let max2 = 0;

for (let i = 0; i < arr.length; i++) {
  if (max1 < arr[i]) {
    max2 = max1;
    max1 = arr[i];
  }
  if (max2 < arr[i] && arr[i] != max1) {
    max2 = arr[i];
  }
}

console.log(max2);
