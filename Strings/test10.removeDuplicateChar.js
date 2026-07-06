let str = "banana" ;
let strArr = [...str] ;
let res = ""; 

for(let i= 0; i<strArr.length ;i++){
    if(strArr[i] == ""){
        continue ;
    }
    for(let j = i+1 ;j<strArr.length ;j++){
        if(strArr[i]== strArr[j]){
            strArr[j] = "";
        }
    }
    res += strArr[i] ;
}

console.log(res);
