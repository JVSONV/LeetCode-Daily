var leftRigthDifference = function(nums) {

  if(nums.length === 1) return [0];

  const right = [];
  let rightCount = 0;
  const left = [0];
  let leftCount = 0;
  let j = nums.length-1;
  
  for(let i = 0; i < nums.length-1; i++) {
          leftCount+=nums[i]
          left.push(leftCount);
          rightCount+=nums[j]
          right.push(rightCount);
          j--;
  }
  right.reverse();
  right.push(0);
  for(let i = 0; i < nums.length; i++) {
      nums[i] = Math.abs(left[i] - right[i]);
  }
  return nums;
};