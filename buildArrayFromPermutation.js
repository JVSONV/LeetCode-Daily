var buildArray = function(nums) {
    return nums.map((num)=> {
        let value = nums.indexOf(num);
        return nums[nums[value]]
    })
};