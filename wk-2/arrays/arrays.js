const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
myOtherArray.push('star wars');
myOtherArray.push('raiders of the lost arc');
//myArr.pop();
//myArr.shift();
myArr.unshift('james');
 
console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]);
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(myArr[bettyIdx]);
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, 'robert');
console.log(myArr);
console.log(myArr.length);
//Math.random() for random 0 and 1
//Math.round(n) rounds to nearest whole number
//myArr.length - 1 to get get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr(randomNumber));