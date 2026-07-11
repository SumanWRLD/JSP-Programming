let arr= [1,2,3,4,5,6,7] ;
let first = 0 ;
let last = arr.length - 1 ;

let temp = arr[first] ;
arr[first] = arr[last] ;
arr[last] = temp ;

console.log(arr);
