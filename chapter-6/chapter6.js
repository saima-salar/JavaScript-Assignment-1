// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

let number=5;
let a = ((number + 5) * 10) / 10;
document.write("Result:<br>");
document.write("The value of a is : "+ a +"<br>" );

// document.write("..................................<br><br>")

// document.write("The value of ++a is : "+ ++a +"<br>")
// document.write("Now the value of a is : "+ a +"<br><br>")

// document.write("The value of a++ is : "+  a++ +"<br>")
// document.write("Now the value of a is : "+ a +"<br><br>")

// document.write("The value of --a is : "+ --a +"<br>")
// document.write("Now the value of a is : "+ a +"<br><br>")

// document.write("The value of a-- is : "+ a-- +"<br>")
// document.write("Now the value of a is : "+ a +"<br><br>")

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a =2;
// let  b = 1;
// document.write("a is : "+ a +"<br>");
// document.write("b is : "+ b +"<br>");
// document.write("The value of (--a - --b) is : "+ (--a - --b) +"<br>");
// document.write("The value of ++b is : "+ ++b +"<br>");
// document.write("Result is : " + (((--a - --b )+ ++b) + b--) +"<br>");

// // 3. Write a program that takes input a name from user &
// // greet the user.

// let userName=prompt(`Enter Your name`);
// alert("Hello "+ userName + "!");

// 4. question 4 is missing.

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// document.write(" <h1>Table </h1> ");

// let num = prompt("please enter a valid number");
// for (let i = 1; i <= 10; i++) {
//   document.write("<div>");
//   document.write(num + " x " + i + " = " + i * num);
//   document.write("</div>");
// }

// 6.Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// let sub1 = "English";
// let sub2 = "Math";
// let sub3 = "Urdu";
// let obtainedMraksforsub1 = 54;
// let obtainedMraksforsub2 = 54;
// let obtainedMraksforsub3 = 48;
// let totalMarks = 100;
// let sum_totalmarks=100+100+100;
// let sum_obtainedmarks=54+54+48;

// document.write("<h3>Marks and Percentage Calculator</h3>");

// document.write(sub1     +   "     "  + totalMarks   +  "     "+ obtainedMraksforsub1 +  "     " + obtainedMraksforsub1/totalMarks*100+"%<br>");
// document.write(sub2     +   "     "  + totalMarks   +  "     "+ obtainedMraksforsub2 +  "     " + obtainedMraksforsub2/totalMarks*100+"%<br>");
// document.write(sub3     +   "     "  + totalMarks   +  "     "+ obtainedMraksforsub3 +  "     " + obtainedMraksforsub3/totalMarks*100+"%<br>");
// document.write("      " +   "     "  +sum_totalmarks   +  "     "+ sum_obtainedmarks +  "     " + sum_obtainedmarks/sum_totalmarks*100+"%<br>");