// declaring a constant nameSur name_sur name_Sur (diff ways to name variables)

// var and const can be declared as constant -> const 
// for var there are two ways var and let. we prefer "let" because scope
const accountId = 154554
let accountEmail = "hitesh@google.com" 

var accountPassword = "12345" 
/*
Var is not prefered and not used in practice because of 
issue in block scope and functional scope
*/

accountCity = "Jaipur" // not a good practice but can be done

// accountId = 2 // not allowed as const is a fixed value

let accountState; // undefined
accountEmail = "hc@hc.com"
accountCity = "Mumbai"


// to print the data in a array form 

console.log([accountId,accountEmail,accountPassword,accountCity]);


// to print all the data in tabular form in output

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);