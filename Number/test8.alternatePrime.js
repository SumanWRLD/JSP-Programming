import { isPrime } from "./test2.isPrime.js";

let n = 20 ;
let flag = true ;

for(let i = 1 ;i<= n;i++){
    if(isPrime(i)){
        if(flag){
        console.log(i);
        flag = false ;
    }else{
        flag = true ;
    }
    }
}