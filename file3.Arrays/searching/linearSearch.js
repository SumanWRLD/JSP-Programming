let arr = [2,1,7,2,6,0,5] ;

function linearSearch(arr,key){
    for(let i = 0 ;i<arr.length ;i++){
        if(arr[i] == key) {
            return i ;
        }
    }
    return -1 ;
}

console.log(linearSearch(arr,7));
