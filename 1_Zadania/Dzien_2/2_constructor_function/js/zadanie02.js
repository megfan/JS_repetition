// --------------D2 F2 Zad3--------------



var Calculator = function () {
    this.array = [];
};

Calculator.prototype.add = function (num1, num2) {
    var sum = num1 + num2;
    this.array.push("added " + num1 + " to " + num2 + " got " + sum);
    return sum;
};

Calculator.prototype.multiply = function (num1, num2){
    var result = num1 * num2;
    this.array.push("multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
};

Calculator.prototype.substract = function (num1, num2) {
    var result = num1 - num2;
    this.array.push("substracted " + num1 + " from " + num2 + " got " + result);
    return result;
};

Calculator.prototype.divided = function (num1, num2){
    var result = num1 / num2;
    this.array.push("divided " + num1 + " by " + num2 + " got " + result);
    return result;
};
Calculator.prototype.printOperations = function () {
    console.log("Operation List");
    for (var i = 0; i < this.array.length; i++){
        var operation = this.array[i];
        console.log(operation);
    }

    console.log(this.array);
}
Calculator.prototype.clearoperations = function () {
    this.array = [];
}

var calc = new Calculator();
console.log(calc.add(1,3));
console.log(calc.multiply(3,2));
console.log(calc.divided(6,3));
console.log(calc.substract(5,3));
calc.printOperations();
calc.clearoperations();