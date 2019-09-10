//minimum

function minimum(x, y) {
    if (x < y) {
      return x;
    } if ( x === y) {
        console.log("they are the same value")
    } else {
      return y;
    }
  }
  
  console.log(minimum(10, 9));
 

  //recursion

  function isEven(x) {
      if (x === 0) {
          return true
      } 
      else if (x === 1) {
          return false
      } else if(x < 0) {
          return isEven(-x)
      } else {
          return isEven(x - 2)
          
      }
  }

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-4));

  //bean counting

  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }

console.log(countBs("BumbleBeeTuna"));
console.log(countChar("teetertotter", "t"));
