let str = "race    car";
function isPalindrome(str) {
  let str1 = ""
  for (let i =0; i < str.length; i++) {
    if (str[i] != " ") {
        console.log(str[i]);
        
      str1+=str.charAt(i)
    }
  }

  let i = 0;
  let j = str1.length - 1;
  while (i < j) {
    if (str1[i] != str1[j]) {
        return false ;
    }
    i++ ;
    j-- ;
  }
  return true ;
}

console.log(isPalindrome(str));

