let str = "HelloWorld" ;
let ans = "" ;
for(let i = 0 ; i<Math.trunc(str.length/2);i++){
    ans = ans+ str.charAt(i)
}

for(let i =str.length-1 ;i>=Math.trunc(str.length/2) ;i--){
    
    ans = ans + str.charAt(i)
}

console.log(ans);
