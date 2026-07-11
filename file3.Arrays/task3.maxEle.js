function maxElement(arr){
    let max = 0 ;
    for(let i = 0 ;i<arr.length ;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max ;
}

let arr = [1,2,33,3,4,5] ;
console.log(maxElement(arr));
