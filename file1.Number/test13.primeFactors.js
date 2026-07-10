import { isPrime } from "./test2.isPrime.js";

let num = 100;

for(let i = 2 ;i<=num ;i++){
    if(num%i == 0){
        if(isPrime(i)){
            console.log(i);
        }
    }
}