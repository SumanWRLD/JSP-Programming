let s1= "javascript is very easy" ;
let str = s1.split(" ") ;

for(let i = 0 ; i< str.length; i++){
    str[i] = firstCharToUpper(str[i]) ;
}
let ans = str.join(" ")
console.log(ans);


function firstCharToUpper(str){
    let res = "" ;
    res = res + str.charAt(0).toUpperCase() ;
    for(let i = 1 ;i<str.length; i++){
        res+= str.charAt(i)
    }
    return res; 
}
