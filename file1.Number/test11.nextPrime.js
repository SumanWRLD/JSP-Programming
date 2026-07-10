import { isPrime } from "./test2.isPrime.js";

let n = 99 ;

while(true){
    if(isPrime(n)){
            console.log(n);
            break ;
    }
    n++ ;
}