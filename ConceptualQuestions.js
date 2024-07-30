"use strict";
//Question 1
console.log("Hello,World!");
//Question 2
let temperature = 43;
if (temperature > 20) {
    console.log("It's cold");
}
else {
    console.log("It's hot");
}
//Question 3
let totalapples = 10;
let giveawayapples = 3;
console.log(totalapples - giveawayapples);
//Question 4
let firstname = "Aimal";
let lastname = "Noor";
let fullname = `My fullname is ${firstname} ${lastname}.`;
console.log(fullname);
//Question 5
let number = 5;
if (number > 3) {
    console.log("yes");
}
else {
    console.log("no");
}
//question6
function calculatearea(radius, pie = 22 / 7) {
    return (pie * radius ** 2);
}
console.log(calculatearea(9));
//Question 7
for (let Num = 1; Num < 51; Num++)
    if (Num % 3 == 0) {
        console.log("fizz");
    }
    else if (Num % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(Num);
    }
// Question 8
let temperature1 = [40, 56, 43, 98, 100, 67];
let highesttemperature = Math.max(...temperature1);
console.log(highesttemperature);
//Question 9
let age = 14;
if (age < 18) {
    console.log("You are minor");
}
else {
    console.log("You are adult");
}
//Question 10
function PositiveCount(Numbers) {
    return Numbers.filter((Numbers) => Numbers > 0).length;
}
console.log(PositiveCount([1, -5, 9, -6, 7, -10]));
//Question 11
function Words(words) {
    return words.filter((words) => words.startsWith("A") || words.startsWith("a"));
}
console.log(Words(["Apple", "Banana", "Hello", "Ant", "async"]));
//Question 12
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]);
//Q13
function squaredNumbers(num) {
    return num.map((n) => n * n);
}
console.log(squaredNumbers([2, 5, 7]));
//Q#14
function reverseArray(mob) {
    let reversed = [];
    for (let i = 0; i < mob.length; i++) {
        reversed.unshift(mob[i]);
    }
    return reversed;
}
let myArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(myArray);
console.log(reversed);
//Q#15
function analyzeScores(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedingMaxCount = 0;
    let fallingBelowMinCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            exceedingMaxCount++;
        }
        else if (scores[i] < minScore) {
            minScore = scores[i];
            fallingBelowMinCount++;
        }
    }
    console.log(`Number of times score exceeded maximum score: ${exceedingMaxCount}`);
    console.log(`Number of times score fell below minimum score: ${fallingBelowMinCount}`);
}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
analyzeScores(scores);
//Q#16
function removeFalseyValues(array) {
    return array.filter(Boolean);
}
let array = [0, 1, false, true, null, undefined, "hello", NaN];
let filterArray = removeFalseyValues(array);
console.log(filterArray);
//Q17
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatedarry = (array1.concat(array2));
console.log(concatedarry);
//Q18
function sumOfElements(arr, isEven) {
    let sum = 0;
    for (let num of arr) {
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            sum += num;
        }
    }
    return (sum);
}
//Q#19    
function Index(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
let basket1 = [2, 3, 4, 5, 78, 90, 45];
let elementToFind = 78;
let index = Index(basket1, elementToFind);
console.log("Index of", elementToFind, "in basket1:", index);
//Q20
function smallestnumber(numbers) { return Math.min(...numbers); }
console.log(smallestnumber([45, 23, 14, 10, 9, 3]));
//Q21
function calculateProduct(numbers) {
    if (numbers.length === 0) {
    }
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return (product);
}
let numbers = [2, 3, 4];
let product = calculateProduct(numbers);
console.log("The product of numbers is:", product);
//Q22
function filterByLength(arr, n) {
    let result = [];
    for (let str of arr) {
        if (str.length > n) {
            result.push(str);
        }
    }
    return result;
}
let strings = ["apple", "banana", "orange", "grape"];
let filteredStrings = filterByLength(strings, 5);
console.log(filteredStrings);
//Q23
function findDuplicates(arr) {
    let duplicates = [];
    arr.filter((item, index) => {
        if (arr.indexOf(item) !== index && !duplicates.includes(item)) {
            duplicates.push(item);
        }
    });
    console.log(duplicates.length > 0 ? "Duplicates found: " + duplicates : "No duplicates found.");
}
let numbers0 = [1, 2, 3, 4, 2, 5, 6, 3];
findDuplicates(numbers);
//Q24
function incrementAll(arr) {
    return arr.map(num => num + 1);
}
let num = [1, 2, 3, 4, 5];
let incrementedNumbers = incrementAll(numbers);
console.log(incrementedNumbers);
//Q25
function countOccurrences(numbers, numberToCount) {
    let count = 0;
    for (let num of numbers) {
        if (num === numberToCount) {
            count++;
        }
    }
    return (count);
}
let numbersList = [1, 2, 3, 4, 2, 5, 2];
let countOfTwos = countOccurrences(numbersList, 2);
console.log(countOfTwos);
//Q26
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
let numbers10 = [1, 2, 3, 4, 5];
let numbers20 = [1, 3, 2, 4, 5];
console.log(isSorted(numbers10));
console.log(isSorted(numbers20));
//Q27
function formatNames(names) {
    if (names.length === 0) {
        return '';
    }
    else if (names.length === 1) {
        return names[0];
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    else {
        let formattedNames = names.slice(0, -1).join(', ');
        return `${formattedNames}, and ${names[names.length - 1]}`;
    }
}
let names1 = ['Aimal', 'Wania', 'Widdad'];
let names2 = ['Widdad', 'Wania'];
let names3 = ['Aimal'];
console.log(formatNames(names1));
console.log(formatNames(names2));
console.log(formatNames(names3));
//Q28
function fahrenheitToCelsius(fTemps) {
    const cTemps = [];
    for (const temp of fTemps) {
        const celsius = (temp - 32) * 5 / 9;
        cTemps.push(celsius);
        console.log(celsius);
    }
    return (cTemps);
}
const fTemps = [32, 68, 100, 78];
const cTemps = fahrenheitToCelsius(fTemps);
//Q29
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = sum / numbers.length;
    return { min, max, average };
}
const numbers23 = [1, 2, 3, 4, 5];
const result = minMaxAverage(numbers);
console.log(result);
//Q30
function swapElements(arr, index1, index2) {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        console.log(`Array after swapping indices ${index1} and ${index2}:`, arr);
    }
    else {
        console.log("Invalid indices provided. Array remains unchanged.");
    }
}
const number67s = [1, 2, 3, 4, 5];
swapElements(numbers, 1, 3);
//Q31
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
let sentence = "Hello, how are you?";
let character = 'o';
let result45 = countCharacterOccurrences(sentence, character);
console.log(`The character '${character}' appears ${result45} times in the sentence.`);
//Q32
let todoList = [
    { task: "English Homework", completed: false },
    { task: "Maths homework", completed: true },
    { task: "Biology Himework", completed: false },
    { task: "Physics Homework", completed: true },
];
function logIncompleteTasks(list) {
    for (let i = 0; i < list.length; i++) {
        if (!list[i].completed) {
            console.log(list[i].task);
        }
    }
}
logIncompleteTasks(todoList);
//Q33 
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
let numb690 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedNumbers = sortArray(numb690);
console.log(sortedNumbers);
//Q34
function reverseArray2(mob) {
    let reversed = [];
    for (let i = 0; i < mob.length; i++) {
        reversed.unshift(mob[i]);
    }
    return reversed;
}
let myArray22 = [1, 2, 3, 4, 5];
let reversed2 = reverseArray(myArray);
console.log(reversed);
