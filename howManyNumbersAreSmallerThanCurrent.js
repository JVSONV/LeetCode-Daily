var smallerNumbersThanCurrent = function(nums) {
  let answerNums = [];
  for(let i = 0; i < nums.length; i++) {
      let count = 0;
      for(let j = 0; j < nums.length; j++) {
          if(nums[i] === nums[j]) {
              continue;
          }
          if(nums[i] > nums[j]) {
              count++
          }
      }
      answerNums.push(count);
  }
  return answerNums;
};