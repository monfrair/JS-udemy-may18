// coding challenge 2
/*
var years = [1975, 1981, 2012, 1912, 1966];

var ages = [];

for (i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];

}

for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age');
    } else {

        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' yeard old and is NOT of full age');

    }

}
*/


function printFullAge(years) {


    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];

    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age');
            fullAges.push(true);
        } else {

            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' yeard old and is NOT of full age');
            fullAges.push(false);
        }

    }
    return fullAges;
}
var years = [1975, 1981, 2012, 1912, 1966];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

//Loops


/*
var names = ['john', 'jane', 'jack', 'red', 'bob'];

for (var i = names.length; i >= 0; i--) {
    console.log(names[i]);
}

*/
// while loops
/*
var names = ['john', 'jane', 'jack', 'red', 'bob'];

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}



 */



// Lecture objects







/*
var john = {
    name: 'john',
    lastName: 'smith',
    age: 25,
    job: 'teacher',
    isMarried: false

};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'jane';
jane.lastName = 'smith';
jane['job'] = 'retired';

console.log(jane);

/*
var heightJohn = 170;
var heightMike = 165;

var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

/*

if (scoreJohn > scoreMike) {
    console.log('John Wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike Wins the game with ' + scoreMike + ' points');
} else {
    console.log('No winner');
}
*/
/*
var maryHeight = 158;
var maryAge = 31;
var scoreMary = maryHeight + 5 * maryAge;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John Wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike Wins the game with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreJohn) {
    console.log('Mary Wins the game with ' + scoreMike + ' points');
} else {
    console.log('No winner');
}
*/


// Lecture Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1966);

console.log(ageJohn);
console.log(ageMike);


function yearsUntilRetire(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log('years left until I retire ' + retirement);

    } else {
        console.log(name + ' this a-hole has already retired');
    }
}
yearsUntilRetire('john', 1990);
yearsUntilRetire('sally', 1950);
yearsUntilRetire('tom', 1972);
*/


// Arrays lecture

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'ben';
console.log(names);


var john = ['hong', 'smith', 1998, 'design', false];

john.push('dolphins');
john.unshift('dkhead');
john.pop();
john.shift();

console.log(john);



if (john.indexOf('teacher') === -1) {
    console.log('he is not a teacher');
}
*/
