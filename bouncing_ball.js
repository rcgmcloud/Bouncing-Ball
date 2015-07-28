function bouncingBall(h,  bounce,  windowH) {
  var seen = 1;
  var newHeight = h;

  if(h < 0 || bounce <= 0 || bounce >= 1 || windowH >= h){
    return -1;
  }

  while(newHeight > windowH){
    if(newHeight * bounce > windowH){
      seen += 2;
    }
    newHeight = newHeight * bounce;
  }
  return seen;
}