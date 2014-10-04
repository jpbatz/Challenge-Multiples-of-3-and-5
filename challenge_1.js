exports.sumOfAMultiple = function(n){
  var sum = 0;
  // do your work here
  
  // loop through 1 (not 0) through n argument
  for(var i=1; i<n; i++) {
    // test for multiple of 3 or 5
    if(i % 3 === 0 || i % 5 === 0) {
    // if true, add to sum
      sum += i;
    }
  }
  // display sum
  console.log(sum);
  // return sum
  return sum;
};