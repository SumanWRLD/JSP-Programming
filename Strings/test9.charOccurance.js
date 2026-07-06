let str = "malayalam" ;
let strArr = [...str] ; // converting to character array so that we can itterate the string and manipulate the string, as string is immutable

for(let i = 0 ; i< strArr.length ; i++){
    let count = 1 ;
    if(strArr[i] == ""){
        continue ; // 2 when the array index is empty no need to count for that index
    }
    for(let j = i+1 ;j< strArr.length; j++){
        if(strArr[i] == strArr[j]){
            count ++ ;
            strArr[j] = ""; // 1 make it empty so that we don't have to count the occrance of same number for more than one time
        }
    }
    console.log(strArr[i] , " : ", count);
}