let N = 28 ;
let sum = 0 ;

for(let i =1 ;i<=N/2; i++){
    if(N%i == 0){
        sum+=i ;
    }
}

if(N == sum){
    console.log("The Number is a perfect number");
}else{
    console.log("The Number is not a perfect number");
}