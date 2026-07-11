function sumElement(arr){
    let ans  = 0 ;
    for(let i = 0 ;i<arr.length ;i++){
        ans+=arr[i] ;
    }
            return ans ;

}

let arr = [1,2,3,4,5] ;
console.log(sumElement(arr));
