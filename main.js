//-->Exercise 1

//first solution
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FizzBuzz");

    } else if (i % 5 == 0) {
        console.log("Buzz");

    } else if (i % 3 == 0) {
        console.log("Fizz");

    } else {
        console.log(i);
    }
}

//-->Exercise 2

//first solution

let stair = "#";
let reps = 8;

while (stair.length <= reps) {
    console.log(stair);
    stair = stair + "#";
}