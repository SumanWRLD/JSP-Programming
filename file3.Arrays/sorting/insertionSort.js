let arr = [2,5,1,9,5,3] ;

for(let i = 1 ;i<arr.length ;i++){
    j = i-1 ;
    let key = arr[i]
    while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j] ;
        j-- ;
    }
    arr[j+1] = key ;
}

console.log(arr);
