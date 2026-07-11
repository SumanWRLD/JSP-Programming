function revArr(arr){
    let st = 0 ;
    let en = arr.length-1 ;
    while(st<en){
        let el = arr[st] ;
        arr[st] = arr[en] ;
        arr[en] = el ;
        st++ ;
        en-- ;
    }
    return arr ;
}

let arr = [ 1,2,3,4,5]; 
let revArray = revArr(arr) 
console.log(revArray);

