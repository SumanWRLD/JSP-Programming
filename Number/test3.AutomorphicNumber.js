let N = 76;
let temp = N

let dig = 0 ;
while(temp>0){
    dig++ ;
    temp = Math.trunc(temp/10); 
}

let sqr = N*N ;
let div = Math.pow(10,dig); 
if(N == sqr%div){
    console.log(`${N} is a Automorphic number`);
}else{
    console.log(`${N} is not a Automorphic number`);
}

