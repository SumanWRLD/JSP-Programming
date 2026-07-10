function isAnag(s1,s2){
    while(true){
        if(s1.length== 0 && s2.length == 0) {
            return true ;
        }
        if(s1.length!=s2.length){
            return false ;
        }

        let ch = s1.charAt(0) ;
        s1 = s1.replace(ch,"") ;
        s2 = s2.replace(ch,"") ;
    }

    // Method 2
    // if(s1.length != s2.length) return false ;

    // let s1Sum = 0 ;
    // let s2Sum = 0 ;
    // for(let i = 0 ; i< s1.length ;i++){
    //     s1Sum += s1.charAt(i).charCodeAt()
    //     s2Sum += s2.charAt(i).charCodeAt()
    // }

    // if(s1Sum == s2Sum){
    //     return true ;
    // }else{
    //     return false ;
    // }

}

console.log(isAnag("owl","low"));

