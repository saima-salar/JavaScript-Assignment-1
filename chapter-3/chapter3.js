// 1. Declare a variable called age & assign to it your age. Show
//    your age in an alert box.

let age = 25;

alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many
//    times a visitor has visited a web page. Show his/her
//    number of visits on your web page. For example: “You
//    have visited this site N times”.

let timeTrack = 15;
alert(" You have visited this site" + timeTrack + " times.");

// 3. Declare a variable called birthYear & assign to it your                      
//    birth year. Show the following message in your browser:

let birthYear = 1995;

document.write("<h4> My birth year is " + birthYear + "</h4>" );
document.write ( "<h4> Data type of my decleared veriable is number </h4>") ;


// 4. A visitor visits an online clothing store
//    www.xyzClothing.com . Write a script to store in variables
//   the following information:

//   a. Visitor’s name
//   b. Product title
//   c. Quantity i.e. how many products a visitor wants to order
//    Show the following message in your browser: “John
//    Doe ordered 5 T-shirt(s) on XYZ Clothing store”. -->


let visitorName="John Doe";
let productTiltle="T-shirt";
let quantity=5
let clothingStore="XYZ Clothing store";

document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>"+quantity +"</b> " + "<b>"+productTiltle + "</b>" + "(s) on "+ clothingStore ); 
