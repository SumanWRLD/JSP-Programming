function isPalindrome(num){
    let temp = num ;
    let rev = 0;
    while(num>0){
        let dig = num%10 ; // 1 2 1
        rev = rev*10 + dig ; // 1 12 121
        num = Math.trunc(num/10) ;
    }
    
    return rev==temp;
}

let arr = [12,121,32,32123,414,35,66,99,0] ;
for(let i = 0 ;i<arr.length ;i++){
    if(isPalindrome(arr[i])){
        console.log(arr[i]);
    }
}