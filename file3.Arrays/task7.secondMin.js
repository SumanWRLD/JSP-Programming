
function secondMin(arr){
    let min1 = Number.MAX_SAFE_INTEGER ;
    let min2 = Number.MAX_SAFE_INTEGER ;

    for(let i = 0 ;i <arr.length ;i++){
        if(arr[i]<min1){
            min2 = min1 ;
            min1 = arr[i]
        }
        if(arr[i]<min2 && arr[i] != min1){
            min2 = arr[i]
        }
    }
    return min2 ;
}

let arr = [6,2,7,1,9,2] ;

console.log(secondMin(arr));
