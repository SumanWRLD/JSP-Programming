let arr = [3,1,8,4,9,5] ;

for(let i = 0 ;i<arr.length -1 ;i++){
    let index = i;
    for(let j = i +1 ;j<arr.length ;j++){
        if(arr[index] > arr[j]){
            index = j ;
        }
    }
    if(i!=index){
        let temp = arr[i] ;
        arr[i] = arr[index] ;
        arr[index] = temp
    }
}


console.log(arr);

