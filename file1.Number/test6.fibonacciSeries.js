function genFibonacci(n){
    let a = 0 ;
    let b = 1 ;
    let c = 0 ;

    for(let i = 1; i<=n ;i++){
        console.log(a);
        c = a + b ;
        a = b ;
        b = c ;
    }
}

genFibonacci(10);