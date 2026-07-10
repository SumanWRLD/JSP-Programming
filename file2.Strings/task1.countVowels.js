function isVowel(char){
    char = char.toLowerCase() ;
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        return true ;
    }
    return false ;
}

function countVowels(s1){
    let str = [...s1] ;
    let count = 0 ;
    for(let i = 0 ; i<str.length; i++){
        if(isVowel(str[i])){
            count ++ ;
        }
    }
    console.log(count);
}
console.log(isVowel('a'));


let str = "banana"; 
countVowels(str);