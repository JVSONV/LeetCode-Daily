var twoSum = function (nums, target) {
  const answer = {};

  for (let i = 0; i < nums.length; i++) {
    let numNeeded = target - nums[i];
    if (answer[numNeeded] || answer[numNeeded] === 0) {
      return [answer[numNeeded], i];
    }
    answer[nums[i]] = i;
  }
};
