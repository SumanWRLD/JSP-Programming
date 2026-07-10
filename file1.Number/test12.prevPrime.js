import { isPrime  } from "./test2.isPrime.js";

let n = 20 ; 

while(true){
    n-- ;
    if(isPrime(n)){
        console.log(n);
        break; 
    }
}
