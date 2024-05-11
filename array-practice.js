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
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      let total = 0
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          total++
        }
      }
      newArr.push(total)
    }
    return newArr
};
// console.log(smallerThanCurr([8,1,2,2,3]))

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return true
      }
    }
  }
  return false
};

const secondLargest = arr => {
  let newArr = []
  if (arr.length <= 1) return 
  for (let i = 0; i < arr.length; i++) {
    let total = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        total++
      }
    }
    newArr.push(total)
  }
  let index = newArr.indexOf(1)
  if (newArr.indexOf(1) === -1) {
    return arr[0]
  }
  return arr[index]

};
const arr = [4, 2, 3, 6, 8]
console.log(secondLargest(arr))

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];

