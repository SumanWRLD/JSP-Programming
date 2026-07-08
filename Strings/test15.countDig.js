let s1 = "java123Script45" ;

let sum = 0 ;
for(let i = 0 ; i<s1.length ;i++){
    if(s1.charAt(i)>= 0 && s1.charAt(i) <= 9){
        sum += Number(s1.charAt(i))
    }
}

console.log((sum));
