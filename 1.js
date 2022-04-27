// var twoSum = function (nums, target) {
//     var sortedNums = Array.from(nums);
//     sortedNums.sort(function (a, b) { return a - b });
//     var targetValues = checkSum(sortedNums, target, 0, nums.length);
//     var val1 = nums.indexOf(targetValues[0]);
//     nums[val1] = undefined;
//     var val2 = nums.indexOf(targetValues[1]);
//     return [val1, val2];
// };

// function checkSum(nums, target, start, end) {
//     let mid = Math.ceil((start + end) / 2);
//     let eAtStart = nums[start];
//     let eAtMid = nums[mid];
//     if (eAtStart + eAtMid > target) {
//         return checkSum(nums, target, start, mid);
//     } else if (eAtStart + eAtMid < target) {
//         return checkSum(nums, target, nums.length % 2 != 0 ? mid : mid - 1, end);
//     } else {
//         return [eAtStart, eAtMid];
//     }
// }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    let result = [];
    let firstN;
    nums.forEach((val, i, arr) => {
        if (hashMap[target - val] != undefined) {
            firstN = val;
            result.push(hashMap[target - val]);
            result.push(i);
        }
        hashMap[val] = i;
    });
    return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([2, 5, 5, 11], 10));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([0, 4, 3, 0], 0))
// console.log(twoSum([3, 2, 3], 6))
