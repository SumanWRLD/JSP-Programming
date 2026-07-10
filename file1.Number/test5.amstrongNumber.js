function checkAmstrong(n){
    let len = 0 ;
    let temp = n ;
    let sum = 0 ;

    while(temp>0){
        len++;
        temp = Math.trunc(temp/10) ;
    }

    temp = n ;
    while(temp>0){
        let dig = temp % 10 ;
        sum = sum + Math.pow(dig,len) ;
        temp = Math.trunc(temp/10)
    }

    if(n == sum){
        return true ;
    }else{
        return false ;
    }
}


let n = 151 ;
if(checkAmstrong(n)){
    console.log(`${n} is a Amstrong number `);
}else{
    console.log(`${n} is not a Amstrong number `);
}