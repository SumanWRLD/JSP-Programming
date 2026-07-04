import { isPrime } from "./test2.isPrime.js";

let n = 100 ;
let count = 1 ; 

for(let i = n ;i>=i; i--){
    if(isPrime(i)){
        console.log(i);
        if(count==3){
            break ;
        }
        count ++ ;

    }
}
