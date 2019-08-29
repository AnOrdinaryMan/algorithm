function binarySearch (arr, target) {
    let head = 0, tail = arr.length - 1;
    let mid;
    while (head <= tail) {
        mid = Math.floor((head + tail) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            head = mid + 1;
        } else {
            tail = mid - 1;
        }
    }
    return -1;
}

// test case
let arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 0));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 6));
