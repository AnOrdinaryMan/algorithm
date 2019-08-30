function quickSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let center = arr[0];
    let left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < center) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(center, quickSort(right));
}

// test case
let arr = [6,3,8,4,5];
console.log(quickSort(arr));