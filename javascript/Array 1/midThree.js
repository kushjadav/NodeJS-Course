function midThree(nums){
  arr = [];
    len = nums.length;
    arr.push(nums[((nums.length+1)/2)-2]);
    arr.push(nums[((nums.length+1)/2)-1]);
    arr.push(nums[(nums.length+1)/2]);
    return arr;

}