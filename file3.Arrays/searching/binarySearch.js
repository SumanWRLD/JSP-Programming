function binarySearch(arr,key){
    let start = 0 ;
    let end = arr.length - 1;
    let mid = Math.trunc((start + end)/2) ;
    while(start<=end){
        if(arr[mid] == key){
            return mid ;
        }
        if(arr[mid]>key){
            end = mid -1 ;
        }
        if(arr[mid]<key){
            start = mid + 1 ;
        }
        mid = Math.trunc((start + end)/2) ;
    }
    return -1 ;
}

let arr = [2,3,6,9,12,16] ;
console.log(binarySearch(arr,9));
