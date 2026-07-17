let arr = [1,0,2,0,5,3,0,5,3,0,5,3,0,1] ;
let ans = []

for(let i = 0 ;i<arr.length ;i++){
    if(arr[i] != 0){
        ans.push(arr[i])
    }
}

for(let i = ans.length ;i<arr.length ;i++){
    ans.push(0) ;
}

console.log(ans);

