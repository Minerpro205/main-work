console.log("Hello console viewer")
console.log("")

const { capitalize } = require("underscore.string");

var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0

console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

var added = num1 + num2
console.log(added)

// Number variables

var number = 0

if(number == 0){console.log("That's 0\n")}
else if(number ==1){console.log("That's 1\n")}
else if(number ==2){console.log("That's 2\n")}
else if(number ==3){console.log("That's 3\n")}
else{console.log("That's not 0-3\n")}

var checkn = 57

switch(checkn){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("That's 1-5")
    break;
    default: console.log(checkn, "is not 1-5\n")
}

let namel = "nathan"
let nameu = namel.toUpperCase();

switch(nameu){
    case 'EVA':
        nameu = namel.toLowerCase();
        nameu = capitalize(nameu)  
        console.log("That's Eva, she's so cute!")
        break;

    case 'AYLA':
        nameu = namel.toLowerCase();
        nameu = capitalize(nameu)  
        console.log("That's Ayla, she's so chonky!")
        break;

    case 'JUNI':
        nameu = namel.toLowerCase();
        nameu = capitalize(nameu)  
        console.log("That's Juni, she's so tiny!")
        break;

        case 'JACK':
        case 'DENNIS':
        case "NATHAN":
            nameu = namel.toLowerCase();
            nameu = capitalize(nameu)  
            console.log("I know", nameu, "from scouts!")
            break;
      
    default:
    namel = namel.toLowerCase()
    namel = capitalize(namel);
    console.log("I don't know who", namel, "is")}
// var counter = 100

// while (counter > 0){
//     console.log(counter);
//     counter = counter - 1;
// } console.log("End of counting")

// for (var i = 0; i < 1001; i++){console.log(i)} console.log("That's a lot of numbers")

var username = document.getElementById('usernameInput')