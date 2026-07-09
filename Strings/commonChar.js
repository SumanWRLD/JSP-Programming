let s1 = "laila" ;
let s2 = "sheela" ;

for(let i = 0 ; i<s1.length ;i++){
    let ch = s1.charAt(i) ;
    for(let j = 0 ;j<s2.length ;j++){
        if(s2.charAt(j) == ch){
            console.log(ch);
            s2 = s2.replace(ch,"")
        }
    }
}