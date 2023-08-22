let fiveNumbers = [];
fiveNumbers = [1, 2, 3, 4, 5];

let personalInfo = {
    name: 'Fatima',
    age: 18,
    height: 158,
    location: 'Baalbeck,chmestar',
    nationality: 'libanaise'
}

let nextThreeNumbers = new Array();
nextThreeNumbers = [6, 7, 8];
let allNumbers = [];
for (let i = 0; i < fiveNumbers.length; i++) {
    allNumbers.push(fiveNumbers[i]);
}
for (let i = 0; i < nextThreeNumbers.length; i++) {
    allNumbers.push(nextThreeNumbers[i]);
}
console.log(allNumbers);
let additionalInfo = {};
additionalInfo = {
    occupation: 'none',
    hobby: 'reading',
    education: 'first year in computerScience'
}
let fullInfo = {};
fullInfo = {
    ...personalInfo,
    ...additionalInfo
}
console.log(fullInfo);

