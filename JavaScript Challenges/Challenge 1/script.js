console.log('I am linked now!');
var name = 'Fatima Tfaily';
alert(name);
var ageVar = 18;
var lastNameVar = "Tfaily";
var DOBVar = "19-5-2005";


let ageLet = 20;
let lastNameLet = "Johnson";
let DOBLet = "9-01-2003";

const ageConst = 33;
const lastNameConst = "Williams";
const DOBConst = "10-03-1990";

ageVar = 26;
lastNameVar = "Dived";
DOBVar = "22-06-1992";

ageLet = 40;
lastNameLet = "Michayel";
DOBLet = "5-12-1983";
//error because is a constant 
//ageConst = 41;
//lastNameConst = "Davis";
//DOBConst = "15-01-1982";

console.log("Using var:");
console.log("Age:", ageVar);
console.log("Last Name:", lastNameVar);
console.log("Date of Birth:", DOBVar);

console.log("Using let:");
console.log("Age:", ageLet);
console.log("Last Name:", lastNameLet);
console.log("Date of Birth:", DOBLet);

console.log("Using const:");
console.log("Age:", ageConst);
console.log("Last Name:", lastNameConst);
console.log("Date of Birth:", DOBConst);
console.log(typeof "this is a text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1215);
console.log(typeof "999");
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);

let s = "hello";
let n = 5;
let b = true;
let a = [1, 2];
let o = { o: "hi" };
let N = null;

console.log('string:', s, typeof s);
console.log('number:', n, typeof n);
console.log('boolean:', b, typeof b);
console.log('array:', a, typeof a);
console.log('object:', o, typeof o);
console.log('Object:', N, typeof N);

const myText = "Hello, world!";

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
    'This is my text using single quotations ${counter} times';
const doubleQuote =
    "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log("myText:", myText);

console.log("backtick:", backtick);
console.log("singleQuote:", singleQuote);
console.log("doubleQuote:", doubleQuote);
console.log("tryThisAlso:", tryThisAlso);

var string1 = "hello everyone";
var string2 = "How are you";
var result;
result = string1 + " " + string2;
console.log(result);

const num = 5;
const str = "5";
const bool = true;

console.log(num === str);
console.log(num !== str);
console.log(num == str);
console.log(num != str);

console.log(num > bool);
console.log(bool >= num);
console.log(str < num);
console.log(str <= num);

let result0 = 5 + 3 * 2;
console.log(result0);

let result1 = 10 / 2 + 3;
console.log(result1);// 10/2=5 then 5+3=8

let result2 = 10 / (2 + 3);
console.log(result2);//2+3=5 then 10/5=2