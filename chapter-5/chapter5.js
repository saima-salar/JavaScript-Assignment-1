// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Addition

// let num1 = 3;
// let num2 = 5;
// let sum = num1 + num2;
// document.write(
//   " <h3>Sum of  " + num1 + "  and  " + num2 + "  is  " + sum + "</h3>"
// );

// 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.

// subtraction

// let num1 = 3;
// let num2 = 5;
// let subtract = num1 - num2;
// document.write(
//   " <h3>Subtraction of  " +
//     num1 +
//     "  and  " +
//     num2 +
//     "  is  " +
//     subtract +
//     "</h3>"
// );

// multiplication

// let num1 = 3;
// let num2 = 5;
// let mulyiply = num1 * num2;
// document.write(
//   " <h3>Multiplication of  " +
//     num1 +
//     "  and  " +
//     num2 +
//     "  is  " +
//     mulyiply +
//     "</h3>"
// );

// division

// let num1 = 3;
// let num2 = 5;
// let divide = num1 / num2;
// document.write(" <h3>Division of  " + num1 + "  and  " + num2 + "  is  " + divide +"</h3>");

// modulus

// let num1 = 3;
// let num2 = 5;
// let modulus = num1 % num2;
// document.write(" <h3>Modulus of  " + num1 + "  and  " + num2 + "  is  " + modulus +"</h3>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// let myNumber;
// document.write("<h3>Value after variable declaration is " + myNumber + "</h3> ");
//     myNumber=5;
// document.write("<h3>Initial value: " + myNumber +"</h3>");

// // // Increment the variable.
//    myNumber++;
//  document.write(" <h3>Value after increment is: "+ myNumber + "</h3>");
//  // // // // Add 7 to the variable.
// myNumber += 7;

// document.write("<h3>Value after addition is: " +  myNumber + "</h3>");

// // // // Decrement the variable.
// myNumber--;
// document.write("<h3>Value after decrement is: " + myNumber+ "</h3>");

// document.write("<h3>The remainder is : " +  myNumber % 3 +"</h3>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:

// let ticketPrice=600
// let ticketCount=5
// document.write("<h3>Total cost to buy " + ticketCount + " tickets to a movie is " + (ticketPrice*ticketCount) +" PKR</h3>")

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// document.write(" <h1>Table</h1> ");

// let num = prompt("please enter a valid number");
// for (let i = 1; i <= 10; i++) {
//   document.write("<div>");
//   document.write(num + " x " + i + " = " + i * num);
//   document.write("</div>");
// }


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// let temperature=25

// Step a: Store a Celsius temperature into a variable
// let cel_temp = 35;
// let f = (cel_temp * 9) / 5 + 32;
// document.write(cel_temp + "°C is " + f + "°F<br>");

// // Step b:  store a Fahrenheit temperature into a variable
// let fah_temp = 60;
// let c = ((fah_temp - 32) * 5) / 9;
// document.write(fah_temp + "°F is " + c + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// document.write("<h1>Shopping Cart</h1>");

// let item1_Price=650;
// let item1_Quantity=3;
// let item2_Price=100;
// let item2_Quantity=7;
// let shippingCharges=100;
// let item1_Cost=(item1_Price*item1_Quantity);
// let item2_Cost=(item2_Price*item2_Quantity);
// let totalCost=(item1_Cost+item2_Cost+shippingCharges);

// document.write("Price of Item 1 is " + item1_Price +" <br> ");
// document.write("Quantity of Item 1 is " + item1_Quantity +" <br>");
// document.write("Price of Item 2 is " + item2_Price +" <br> ");
// document.write("Quantity of Item 2 is " + item2_Quantity +" <br> ");
// document.write("Shipping Charges " + shippingCharges +" <br><br> ");
// document.write("Total Cost of your order is " + totalCost+" <br> ");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// let totalMarks=980;
// let marksObtained=804;
// document.write("<h1>Mraks Sheet</h1><br>");
// document.write("Total marks : " + totalMarks + "<br>");
// document.write("Marks obtained : " + marksObtained + "<br>");
// document.write("Percentage : " + marksObtained/totalMarks*100+"%<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write("<h1>Currency in PKR</h1><br>")

// // Given values
// let usDollars = 10;
// let saudiRiyals = 25;

// // Exchange rates
// let exchangeRateUSDtoPKR = 104.80;
// let exchangeRateSARtoPKR = 28;

// Convert to Pakistani Rupees in a single expression
// let totalPKR = (usDollars * exchangeRateUSDtoPKR) + (saudiRiyals * exchangeRateSARtoPKR);
// document.write("Total Currency in PKR : " + totalPKR );

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let initialNumber=8;
// document.write(((initialNumber+5)*10)/2);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// let currentYear=2024;
// let birthYear=1995;
// age1=currentYear-birthYear;
// age2=age1+1
// document.write("<h3>Age Calculator</h3><br>");
// document.write("Current year : " + currentYear +" <br>" );
// document.write("Birth year :" + birthYear +" <br>" );
// document.write("Your age is : " + age1 + " <br><br>" );
// document.write("They are either "+ age1 +" or "+ age2 +" years old.");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radiusOfcircle=20;

// document.write("Radius of a circle : "+ radiusOfcircle + "<br>");

// document.write("Circumference of a circle = "+ 2 * 3.142 * radiusOfcircle + "<br>");

// document.write("The area is = " + (3.142 * (radiusOfcircle * 2 )));

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let favoriteSnack="chocolate chip";
// let currentAge=15;
// let maxAge=65;
// let daily_amount=3;
// remaining_year = (maxAge - currentAge);
// total_snacks = (remaining_year * 365 * daily_amount);

// document.write("<h3> The Lifetime Supply Calculator </h3>");
// document.write(" Favorite Snack: " + favoriteSnack + "<br>");
// document.write(" Currrent age : " +currentAge + "<br>");
// document.write(" Estimated Maximum Age : " +maxAge + "<br>");
// document.write(" Amount of snack per day : " +daily_amount + "<br>");
// document.write("You will need " + total_snacks +"  " + favoriteSnack + " to last you until the ripe old age of " + maxAge +".");
