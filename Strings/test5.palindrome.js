function checkPalindrome(str){
    str = str.toLowerCase()
    let i = 0 , j = str.length -1  ;
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)){
            return false ;
        }else{
            i++ ;
            j-- ;
        }
    }
    return true ;
}

let str = "mAam" ;

if(checkPalindrome(str)){
    console.log("it's a palindrome");
}else{
    console.log(("it's not a palindrome"));
    
}