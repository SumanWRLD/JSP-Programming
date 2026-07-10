import { isPrime } from "./test2.isPrime.js";

let n = 100 ;
for(let i = 1; i<=n; i++){
    if(isPrime(i)){
        console.log(i);
    }
    
}