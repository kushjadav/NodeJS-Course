function double23(nums){
   if (nums.length != 1 && nums.length != 0)
    return (nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3);
  else return false;
}