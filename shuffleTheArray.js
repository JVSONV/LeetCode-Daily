var shuffle = function(nums, n) {
  const answerArr = [];
  let j = n;
  for(let i = 0; i < nums.length; i++) {
      if(i === n) {
          break
      }
      answerArr.push(nums[i], nums[j]);
      j++
  }
  return answerArr;
};