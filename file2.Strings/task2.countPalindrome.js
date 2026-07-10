import { isPalindrome } from "./test5.palindrome.js";

function countPalindrome(s1){
    let str = s1.split(" ") ;
    let count = 0 ;
    for(let i = 0 ; i< str.length; i++){
        if(isPalindrome(str[i])){
            count ++ ;
        }
    }
    console.log(count) ;
}

let str = "madam is beautiful madam speaks malayalam"

countPalindrome(str) ;