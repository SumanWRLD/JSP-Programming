function reverseString(str){
    let res = ''
    for(let i = str.length - 1 ;i>= 0 ; i--){
        res = res + str[i];
    }
    return res ;
}

let str = "suman" ;
let res = reverseString(str) ;
console.log(res);
