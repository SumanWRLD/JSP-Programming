function printNum(i){
    if(i<1) return ;
    printNum(i-1) ;
    console.log(i);
}

printNum(100) ;