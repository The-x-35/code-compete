function twoSum(nums,target){
    // Write your code here
    for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] + nums[j] === target) {
                  return [i, j];
              }
          }
      }
    return [-1,-1];
  };