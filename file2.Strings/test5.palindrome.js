export function isPalindrome(str){
    str = str.toLowerCase() ;
    let i = 0 ; 
    let j = str.length -1 ;
    while(i<j){
        if(str.charAt(i)!==str.charAt(j)){
            return false ;
        }
        i ++  ;
        j -- ;
    }
    return true ;
}
