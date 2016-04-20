/////////////////////////////////////////////////////////////
// LARGEST CONTIGUOUS SUM
// -----------------------------------------
// What is the largest contiguous (row of numbers) sum of an array of digits?
//
// EX:
// [1, 2, 3] => 6
// [1, 2,-2, 3] => 4
// [1, 2,-4, 1, 2, 3] => 6
//
/////////////////////////////////////////////////////////////



var largestContiguousSum = function (array) {
  // TODO: Implement
  var sum = 0;
  var maxSum = 0;
  var i = 0;
  while (i < array.length){
  	sum+=array[i];
  	maxSum = Math.max(maxSum,sum);
  	i++;
  }
  return maxSum;
};


var array = [10,22,3,4,-5,23,-100,5];
console.log('Pass? ', largestContiguousSum(array) === 57);
