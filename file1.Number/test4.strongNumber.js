function checkStrong(n){
    let temp = n;
    let sum = 0 ;

    while(temp>0){
        let dig = temp % 10 ;
        let fact = 1 ;

        while(dig>0){
            fact = fact * dig ;
            dig-- ;
        }
        sum += fact ;
        temp = Math.trunc(temp / 10)
    }
    console.log(sum);
    
    if(sum == n){
        return true ;
    }else{
        return false ;
    }
}

let n = 145
if(checkStrong(n)){
    console.log(`${n} is a strong number `);
}else{
    console.log(`${n} is not a strong number `);
}