function canBalance(nums){
   var lSum = 0;
  for (var i = 0; i < nums.length; i++) {
    lSum += nums[i];
    var rSum = 0;
    for (var j = nums.length-1; j > i; j--) {
      rSum += nums[j];
    }
    if (rSum == lSum)
      return true;
  }
  return false;
}
