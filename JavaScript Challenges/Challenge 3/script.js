function addNumber(num1, num2) {
    return num1 + num2;
}
let c = addNumber(3, 4);
console.log(c);

function findMax(n1, n2) {
    let max;
    if (n1 > n2) {
        max = n1;
        return max;
    }
    else if (n1 < n2) {
        max = n2;
        return max;
    }
    else {
        console.log("Both are equal");
    }
}
let f = findMax(1, 1);
let f1 = findMax(1, 2);
let f2 = findMax(1, 0);
console.log(f1);
console.log(f2);

function mulNumber(num1, num2) {
    return (num1 * num2);
}

function subNumber(num1, num2) {
    return (num1 - num2);
}

function divNumber(num1, num2) {
    return (num1 / num2);
}

function compute(num1, op, num2) {
    let s;
    switch (op) {
        case '+':
            s = addNumber(num1, num2); break;
        case '-':
            s = subNumber(num1, num2); break;
        case '*':
            s = mulNumber(num1, num2); break;
        case '/':
            s = divNumber(num1, num2); break;
        default:
            console.log('is not a operateur');
    }
    return s;
}

let a = compute(2, '*', 6);
console.log(a);

const globalVar = 4;

const squareNumber = (number) => {
    number * number;
    console.log(globalVar);
    const localVar = 6;
}
console.log(globalVar);
// console.log(localVar);    error because i have declare inside the function

