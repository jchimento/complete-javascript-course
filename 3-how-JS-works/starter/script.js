/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/*eslint-env browser*/
/*jslint vars: true, plusplus: true, devel: true */

///////////////////////////////////////
// Lecture: Hoisting

function calculateAge(year) {
    console.log(2018 - year);
}

console.log(calculateAge(1990));













///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









