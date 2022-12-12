/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     if (nums == null || nums.length < 2) {
      return [0, 0];
    }
    var ret = [];
    var exist = {};
    for (var i = 0; i <3; i++) {
      if (typeof exist[target - nums[i]] !== "undefined") {
        ret.push(exist[target - nums[i]]);
        ret.push(i);
      }

      exist[nums[i]] = i;
    }

    return ret;
}; module.exports = twoSum;