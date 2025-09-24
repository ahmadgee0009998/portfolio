// console.log("hello world");

// let n = 235;
// let n2 = 678;
// sum = n+n2;
// console.log(sum);

// let n = 954;
// let n2 = 627;
// sub = n-n2;
// console.log(sub);

// let n = 47;
// let n2 = 26;
// multi = n*n2;
// console.log(multi);

// let n = 845;
// let n2 = 23;
// divide = n/n2;
// console.log(divide);

//  n = (12*15)+(24*8);
//  console.log(n);

// n = (600 - 240) / 12;
// console.log(n);


// n =25 + 15 * 2 - 30 / 5;
// console.log(n);

// A student scores marks.
// If marks ≥ 90 → Grade A
// If marks ≥ 75 → Grade B
// If marks ≥ 50 → Grade C
// Otherwise → Fail
//  marks = 45;
//  marks > 90 ? console.log ("Grade A") : marks > 75 ? console.log("Grade B"): console.log("fail")

// Write the program.
// Take a number from the user and check if it is even or odd.
// let num = parseInt(prompt("Enter a number: "));
// num %  2 ===0 ? console.log("Even") : console.log("Odd")

// Write a program using a for loop to print numbers from 1 to 10
// for(i=1; i<=10; i++)
// {
// console.log(i)}

// Write a program to print the multiplication table of 5 using a for loop.
// n = 5;
// for(i=1; i<=n*10; i++)
//     if(i%5==0)
// {
// console.log(i);}

// Write a program to print all even numbers between 1 and 50.
// // print only even b/w 1 to 50
// for(i=1; i<=50; i++)
//     if(i%2==0)
// {
// console.log(i);}

// Write a program to print all odd numbers between 1 and 50.
// // print only odd b/w 1 to 50
// for(i=1; i<=50; i++)
//     if(i%2!==0)
// {
// console.log(i);}

// Write a program to print the square of numbers from 1 to 10
// for(i=1; i<=10; i++)
// {
// console.log(i*i)}

// Write a program to print the numbers in reverse order from 100 to 1.
// for(i=100; i>=1; i--)
// {
// console.log(i)}

// Write a program to calculate the sum of even numbers from 1 to 100.
// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }
// console.log(sum);

// Create an array of 10 numbers and use a for loop to print all the elements.
// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// for (let i = 0; i < 10; i++) {
//     console.log(numbers[i])
// }

// Create an array of numbers and use a for loop to find the sum of all elements
// let sum=0;
// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// for (let i = 0; i < 10; i++)
//      {
//     sum += numbers[i];
// }
//     console.log(sum)

// Write a simple function greet() that prints “Hello World”.
// function greet() {
//     console.log("Hello World");
// }
// greet();

// Write a function add(a, b) that takes two numbers and returns their sum.
// function add(a, b){
//     return a+b;
// }
// console.log(add(5,3));

// Also write the same function using an arrow function.
// const add=(a,b) => a+b;
// console.log(add(5,3));

// Write a function square(n) that returns the square of a number.
// function square(a){
//     return a*a;
// }
// console.log(square(6));

// Convert it into an arrow function.
// const square=(a) => (a*a);
// console.log(square(6));

// Write a function isEven(n) that checks if a number is even or odd and returns a message.
// function isEven(n) {
//     if (n % 2 === 0) {
//         return n + "is even";
//     } else {
//         return n + " is odd";
//     }
// }
// console.log(isEven(167));
// console.log(isEven(70));

// Write a function findMax(a, b, c) that returns the largest of three numbers.
function findMax (a,b,c){
    if(a >= b && a >= c) {
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else
console.log(findMax(7, 9, 45));
}