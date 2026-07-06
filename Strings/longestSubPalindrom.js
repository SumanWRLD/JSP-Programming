import { isPalindrome } from "./test5.palindrome.js";

function checkMaxSubPalindrome(str){
    let max = 0 ;
    let res = '' ;

    for(let i = 0 ; i<str.length-1 ;i++){
        for(let j = i+2 ;j<=str.length ;j++){
            let s1 = str.substring(i,j) ;
            if(isPalindrome(s1)){
                if(s1.length > max){
                    max = s1.lenght ;
                    res = s1 ;
                }
            }
        }
    }
    
    return res ;
}

let str = "Malayalam" ;
let maxPalindrome = checkMaxSubPalindrome(str) ;

console.log(maxPalindrome);
