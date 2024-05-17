console.log("String Method")

let name = "RAHUL";
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])

// console.log(name.length)

let lname = "BHATI"
// console.log(`My name is ${name} and Last name is ${lname}`)


// New line ,Tab and Carriage Return

// let text="I am a \n\tgood boy and \t\nvery happy \ralways time";
// console.log(text)

// String Properties
let text = "       Hello World!        ";
console.log(text.trim())
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length)
console.log(name.slice(2, 4)) // 4 value not included this result
console.log(name.replace("RAHUL", "Bhati"))
console.log(name.concat(lname, "Boy"))
console.log(name.charAt(0));
console.log(name.endsWith("L"))// Return Boolena Value
console.log(name.startsWith("R"))  // Return Boolena Value