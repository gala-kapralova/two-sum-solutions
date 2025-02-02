// Solution 1: Brute Force (O(n²))
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];  
            }
        }
    }
    return [];
}

// Solution 2: Hash Map (O(n))
function twoSumHashMap(nums, target) {
    let numMap = {};  
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];  
        }
        numMap[nums[i]] = i;  
    }
    return [];
}

// Solution 3: Two-Pointer (O(n)) (Requires Sorted Array)
function twoSumTwoPointers(nums, target) {
    let sortedNums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);
    let left = 0, right = sortedNums.length - 1;

    while (left < right) {
        let sum = sortedNums[left].num + sortedNums[right].num;
        if (sum === target) {
            return [sortedNums[left].index, sortedNums[right].index];  
        } else if (sum < target) {
            left++;  
        } else {
            right--;  
        }
    }
    return [];
}

// Test the functions
const nums = [4, 2, 11, 7, 15, 1, 3];
const target = 9;

console.log("Brute Force:", twoSumBruteForce(nums, target));
console.log("Hash Map:", twoSumHashMap(nums, target));
console.log("Two-Pointer:", twoSumTwoPointers(nums, target));