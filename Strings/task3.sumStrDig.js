function isNum(ch){
    return parseInt(ch)
}

let str = "sum999an" ;
let strArr = [...str] ;
let sum = 0 ;

for(let i = 0 ; i<strArr.length ;i++){
    if(isNum(str[i])){
        sum = sum + Number(str[i])
    }
}

console.log(sum);


