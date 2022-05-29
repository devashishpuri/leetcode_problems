/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const hashMap = {};
    let hasDuplicate = false;
    for(let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            hasDuplicate = true;
            break;
        } else {
            hashMap[nums[i]] = true;
        }
    }
    return hasDuplicate;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicateConstantSpace = function(nums) {
    const sorted = nums.sort();
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] == sorted[i+1]) {
            return true;
        }
    }
    return false;
};