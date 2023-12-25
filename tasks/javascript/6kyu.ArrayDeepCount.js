/* You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array. */

function deepCount(arr) {
    let count = arr.length; 

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {           
             count += deepCount(arr[i]);
        }
    }
    return count;
}
