function maxSpan(nums){
  var span = 0;
  var tmp = 0;

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        tmp = j-i+1;
        span = Math.max(tmp,span);
      }
    }
  }
  return span;
}