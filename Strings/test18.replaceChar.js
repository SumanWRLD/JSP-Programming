let str = "pool" ;
let ans = "" ;

for(let i = 0 ; i<str.length ;i++){{
    if(str.charAt(i) == "o"){
        ans = ans + "@" ;
    }else{
        ans = ans + str.charAt(i) ;
    }
}}

console.log(ans);
