function linearIn(outer, inner){
var a = 0;
  var b = 0;
  while (a < inner.length && b < outer.length) {
    if (outer[b] == inner[a]) {
      b++;
      a++;
    } else b++;
  }
  return a == inner.length;
}