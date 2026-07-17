let str = "rsace    car";
function isPalindrome(str) {
  let str1 = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      str1+=str.charAt(i)
    }
  }
   console.log(str1);
   
  let i = 0;
  let j = str1.length - 1;
  let count = 0 ;
  while (i <= j) {
    if(count>1){
        return false; 
    }
    if (str1[i] != str1[j]) {
        console.log(str1[i]);
        
        if(str1[i] == str1[j-1]){
            count ++ ;
            j-- ;
        }else{
            if(str1[i+1] == str1[j]){
                count ++ ;
                i++ ;
            }else{
                return false ;
            }
        }
    }
    i++ ;
    j-- ;
  }
  return true ;
}

console.log(isPalindrome(str));

