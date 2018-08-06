/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/*eslint-env browser*/
/*jslint vars: true, plusplus: true, devel: true */

/*
Varible and Data types
*/

/*
var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/*
* Varible mutation and type coersion
*/

/*


var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old'
           + job + '. Is he married? ' + isMarried);
           
*/

/*

var massMark = 100;
var massJohn = 120;
var heightMark = 1.8;
var heightJohn = 1.3;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherThanJohn = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's?", markHigherThanJohn);

*/

/*

var johnAverageScore = (89 + 120 + 103) / 3;
var mikeAverageScore = (116 + 94 + 123) / 3;

if (johnAverageScore > mikeAverageScore) {
    console.log('John is the winner');
} else if (mikeAverageScore > johnAverageScore) {
    console.log('Mike is the winner');
} else {
    console.log('Mike and John are tied');
}

johnAverageScore = (234 + 120 + 103) / 3;
mikeAverageScore = (116 + 94 + 123) / 3;

if (johnAverageScore > mikeAverageScore) {
    console.log('John is the winner');
} else if (mikeAverageScore > johnAverageScore) {
    console.log('Mike is the winner');
} else {
    console.log('Mike and John are tied');
}

johnAverageScore = (234 + 120 + 103) / 3;
mikeAverageScore = (116 + 94 + 123) / 3;
var maryAverageScore = (123 + 89 + 400) / 3;

if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
    console.log('John is the winner with ', johnAverageScore, ' points');
} else if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
    console.log('Mike is the winner with ', mikeAverageScore, ' points');
} else if (maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore) {
    console.log('Mary is the winner with ', maryAverageScore, ' points');
} else if (johnAverageScore === mikeAverageScore) {
    console.log('John and Mike tied');
} else if (johnAverageScore === maryAverageScore) {
    console.log('John and Mary tied');
} else if (mikeAverageScore === maryAverageScore) {
    console.log('Mike and Mary tied');
} else {
    console.log('Three Way tie!');
}
 
 
*/
 

/*

function calculateTip(amount) {
    'use strict';
    if (amount >= 50.00) {
        return amount * 0.2;
    } else if (amount < 50.00 && amount >= 200.00) {
        return amount * 0.15;
    } else {
        return amount * 0.10;
    }
}

var tips = [calculateTip(124), calculateTip(48), calculateTip(268)];
var totals = [calculateTip(124) + 124, calculateTip(48) + 48, calculateTip(268) + 268];

console.log(tips);
console.log(totals);
*/

/*
var john = {
    height: 1.8,
    mass: 150,
    calcBMI : function () {
        'use strict';
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    height: 1.6,
    mass: 150,
    calcBMI : function () {
        'use strict';
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
    console.log("John has the highest BMI");
} else if (mark.BMI > john.BMI) {
    console.log('Mark has the hightest BMI');
} else {
    console.log('Mark and John have the same BMI');
}

*/

var johnsVactionSpending = {
    bills: [124, 48, 268, 180, 42],
    calculateTips: function () {
        'use strict';
        this.tipAmounts = [];
        this.totalBills = [];
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tipAmounts.unshift(this.bills[i] * 0.2);
                this.totalBills.unshift((this.bills[i] * 0.2) + this.bills[i]);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tipAmounts.unshift(this.bills[i] * 0.15);
                this.totalBills.unshift((this.bills[i] * 0.15) + this.bills[i]);
            } else {
                this.tipAmounts.unshift(this.bills[i] * 0.1);
                this.totalBills.unshift((this.bills[i] * 0.1) + this.bills[i]);
            }
        }
    }
}

var marksVactionSpending = {
    bills: [77, 375, 110, 45],
    calculateTips: function () {
        'use strict';
        this.tipAmounts = [];
        this.totalBills = [];
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tipAmounts.unshift(this.bills[i] * 0.2);
                this.totalBills.unshift((this.bills[i] * 0.2) + this.bills[i]);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.tipAmounts.unshift(this.bills[i] * 0.1);
                this.totalBills.unshift((this.bills[i] * 0.1) + this.bills[i]);
            } else {
                this.tipAmounts.unshift(this.bills[i] * 0.25);
                this.totalBills.unshift((this.bills[i] * 0.25) + this.bills[i]);
            }
        }
    }
}

function averageTips(tips) {
    var total = 0
    for (var i = 0; i < tips.length; i++) {
        total += tips[i];
    }
    return total / tips.length;
}

johnsVactionSpending.calculateTips();
marksVactionSpending.calculateTips();

var johnsAverageTips = averageTips(johnsVactionSpending.tipAmounts);
var marksAverageTips = averageTips(marksVactionSpending.tipAmounts);

console.log('John\'s average tips:', johnsAverageTips);
console.log('Mark\'s average tips:', marksAverageTips);

if (johnsAverageTips > marksAverageTips) {
    console.log("John has bigger tips")
} else if (marksAverageTips > johnsAverageTips) {
    console.log('Mark has bigger tips');
} else {
    console.log("They Tips the same");
}

































































