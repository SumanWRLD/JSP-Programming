function secondMax(arr){
    let max1 = 0 ;
    let max2 = 0 ;
    for(let i = 0 ;i<arr.length; i++){
        if(max1<arr[i]){
            max2 = max1 ;
            max1 = arr[i]
        }if(max2<arr[i] && arr[i] != max1){
            max2 = arr[i]
        }
    }
    return max2 ;
}

let arr = [6,1,3,4,5,0,2] ;
console.log(secondMax(arr));

