let arr = [2,7,11,13] ;
let target = 18 ;

for(let i = 0 ;i<arr.length - 1 ;i++){
    for(let j = i+1 ;j<arr.length ;j++){
        if(arr[i]+ arr[j] == target){
            console.log(i,j);
        }
    }
}