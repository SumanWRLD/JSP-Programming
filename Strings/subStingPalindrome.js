import { isPalindrome } from "./test5.palindrome.js";

let str = "Malayalam" ; // length 9 , 0-8  
for(let i = 0 ; i<str.length-1;i++){ // 0-7
    for(let j = i+2 ;j<=str.length; j++){ // i+2 - 9 for i=0 , 0 -9 , for last its 7 - 9
        if(isPalindrome(str.substring(i,j))){
            console.log(str.substring(i,j));
        }
    }
}

