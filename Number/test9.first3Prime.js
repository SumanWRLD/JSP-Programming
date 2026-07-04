import { isPrime } from "./test2.isPrime.js";

let n = 100 ;
let count = 1 ; 

for(let i = 1 ;i<n; i++){
    if(isPrime(i)){
        console.log(i);
        if(count==3){
            break ;
        }
        count ++ ;

    }
}
