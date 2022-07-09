function allStar(str){
  if(str.length <= 1)
  return str;
  else
  return str[0] + '*' + allStar(str.substring(1));
}