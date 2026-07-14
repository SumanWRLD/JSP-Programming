function sort(start,end,arr){
    if(start >= end) return; 

    let i = start ;
    let j = end ;
    let pivot = Math.trunc((start + end) /2 ) ;
    while(arr[i]<arr[pivot]) i++ ;
    while(arr[j]>arr[pivot]) j-- ;

    if(i<=j){
        let temp = arr[i] ;
        arr[i] = arr[j] ;
        arr[j] = temp 
        i++;
        j--
    }
    sort(start,j,arr) ;
    sort(i,end,arr) ;
}

let arr = [1,2,8,3,7] ;
sort(0,arr.length-1,arr) ;
console.log(arr);
