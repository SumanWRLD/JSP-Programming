let str = "banana" ;
let strArr = [...str] ;
let min = Number.MAX_SAFE_INTEGER;
let ans = ""

for(let i = 0 ; i< strArr.length ;i++){
    let count = 1 ;
    if(strArr[i] == ""){
        continue ;
    }

    for(let j = i+1 ;j<strArr.length ;j++){
        if(strArr[i] == strArr[j]){
            count ++ ;
            strArr[j] = "" ;
        }
    }

    if(count < min){
        min = count ;
        ans = strArr[i]
    }
}

console.log(ans, min);
