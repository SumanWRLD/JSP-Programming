function minElement(arr){
    let max = Number.MAX_SAFE_INTEGER ;
    for(let i = 0 ;i<arr.length ;i++){
        if(arr[i]<max){
            max = arr[i]
        }
    }
    return max ;
}

let arr = [1,2,33,3,-4,4,5] ;
console.log(minElement(arr));
