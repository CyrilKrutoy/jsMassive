
// // // 1

// // point1
// let arr = [],
//     arrRandLength = Math.round(30 + Math.random() * 20);
// for (let i = 0; i < arrRandLength; i++) {
//     arr.push(Math.round(200 * Math.random() - 100));
// }
// console.log(arr, arr.length)

// // point2
// arr = arr.map(element => element + 2);
// console.log(arr)

// // point3
// let midIndex = Math.ceil(arr.length / 2),
//     midElement = arr[midIndex];
// console.log(midElement)

// // point4
// arr.splice(0, 1, midElement);
// console.log(arr)

// // point5
// let arrMoreZero = arr.every(element => element > 0);
// console.log(arrMoreZero)

// // point6
// let arrIsThereZero = arr.some(element => element === 0);
// console.log(arrIsThereZero)


// // 2 Reversed

// let string = "Lorem ipsum dolor sit amet";
// let reversed = string.split("").reverse().join("")
// console.log(reversed)


// // // 3

// let someKindText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// let sentenceText = someKindText.split('. ');
// sentenceText[sentenceText.length - 1] = sentenceText[sentenceText.length - 1].toUpperCase();
// let newText = sentenceText.join('. \n')
// console.log(newText)


// // // 4

// // point1
let arrFirst = [],
    arrSecond = [];
for (let i = 1; i <= 10; i++) {
    arrFirst.push(Math.round(Math.random() * 10))
}
for (let i = 1; i <= 20; i++) {
    arrSecond.push(Math.round(Math.random() * -10))
}
console.log(arrFirst, arrSecond)

// // point2
let arrUnited = arrFirst.concat(arrSecond);
console.log(arrUnited)
// // point3
let arrDivision = arrUnited.map(element => element / 5);
console.log(arrDivision)
// // point4
arrDivision.sort((first, second) => second - first);
console.log(arrDivision)
// // point5
arrDivision = arrDivision.filter((element) => Number.isInteger(element));
console.log(arrDivision)
// // point5
arrDivision = [];
console.log(arrDivision)


// // // 5
// let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let randomResult = Number.sort(() => Math.random() - 0.5);
// console.log(randomResult)