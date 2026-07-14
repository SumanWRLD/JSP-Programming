let arr = [1,2,1] ;

for(let i = 1 ;i<arr.length ;i++){
    arr[i] = arr[i-1] + arr[i] ;
}

console.log(arr);
