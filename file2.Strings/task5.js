let s1 = "I love javascript" ;
let str = s1.split(" ") ;
let start = 0 ;
let end = str.length - 1 ;
while(start<end){
    let temp = str[start] ;
    str[start] = str[end] ; 
    str[end] = temp ;
    start ++ ;
    end -- ;
}

let ans = str.join(" ") ;
console.log(ans);

