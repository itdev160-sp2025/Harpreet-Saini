let user = "John Doe";
let salutation = "Hello, welcome to my website!";
let welcomeMessage = salutation + " " + user;
let welcomeEl = document.getElementById("Welcome");
welcomeEl.textContent = welcomeMessage;

let productPrice = 100;
let studentDiscount = 0.2;
let studentPrice = productPrice - (productPrice * studentDiscount);
let priceEl = document.getElementById("price");
let studentPriceEl = document.getElementById("student-price");

priceEl.textContent = "Product Price: $" + productPrice.toFixed(2);
studentPriceEl.textContent = "Student Price: $" + studentPrice.toFixed(2);
