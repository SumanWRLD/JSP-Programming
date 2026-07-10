let str = "banana" ;
let strArr = [...str] ;
let max = 0 ;
let ans = ''

for(let i= 0 ; i<strArr.length; i++){
    let count = 1 ;
    if(strArr == ""){
        continue ;
    }
    for(let j = i+1 ;j<strArr.length ;j++){
        if(strArr[i]==strArr[j]){
            count++ ;
            strArr[j] = "";
        }
    }
    if(count > max){
        max = count ;
        ans = strArr[i]
    }
}

console.log(ans," : ",max);
