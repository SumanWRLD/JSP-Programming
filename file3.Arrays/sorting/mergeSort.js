function merge(a,b,c){
    let i = 0 ;
    let j = 0;
    let k = 0 ;

    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            c[k++] = a[i++] ;
        }else{
            c[k++] = b[j++]
        }
    }while(i<a.length){
        c[k++] = a[i++]
    }while(j<b.length){
        c[k++] = b[j++]
    }
}

function sort(arr){
    if(arr.length == 1) return ;

    let left= [];
    let right = [] ;

    for(let i = 0 ;i<Math.trunc(arr.length/2);i++){
        left[i] = arr[i]
    }
    for(let i = left.length ;i<arr.length ;i++){
        right[i - left.length] = arr[i]
    }

    sort(left) ;
    sort(right) ;
    merge(left,right,arr) ;
}

let arr = [4,1,3,2,7,0] ;
sort(arr) ;
console.log(arr);
