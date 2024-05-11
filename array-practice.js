const findMinimum = arr => {
    let smallestNum = [];
    for (let num of arr) {
      if (!smallestNum.length) {
        smallestNum.push(num);
      } else if (smallestNum[0] > num) {
        smallestNum[0] = num;
      }
    }
    return smallestNum[0];
};

const runningSum = arr => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j <= i; j++) {
      total+= arr[j]
    }
    array.push(total);
  }
  return array;
};
// console.log(runningSum([1,2,3,4]));

const evenNumOfChars = arr => {
  let total = 0;
  for (let string of arr) {
    if (string.length % 2 === 0) {
      total++;
    }
  }
  return total;
};

const smallerThanCurr = arr => {
    
};

const twoSum = (arr, target) => {

  // Your code here 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];

