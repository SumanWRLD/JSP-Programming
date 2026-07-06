import { reverseString } from "./test4.reverseString.js";
let s1 = "I love javascript" ;
let str = s1.split(" ");
let ans = "" ;

for(let i = 0 ; i<str.length ;i++){
    str[i] =reverseString(str[i]); 
}

ans = str.join(" ");
console.log(ans);

