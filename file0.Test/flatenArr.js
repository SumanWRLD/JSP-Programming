let arr = [1, [2, [3, 4], 5], 6];

function flatenArr(arr, ans) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatenArr(arr[i], ans);
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(flatenArr(arr, []));