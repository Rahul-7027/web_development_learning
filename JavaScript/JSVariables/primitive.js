// Primtive Data Type

// 1. Number
// 2. Null
// 3. Symbol
// 4. String
// 5. Undefined
// 6. boolean
// 7. BigInt


// 1. Number 
let x = 10;
console.log(typeof x, x)

// 2. Null 
let y = null;
console.log(typeof y, y)


// 3. Symbol 
let z = Symbol("foo");
console.log(typeof z, z)

// 4. String 
let name = "Rahul Bhati";
console.log(typeof name, name)

// 5. undefined 
const myfunction=(t) => {
    if (t === undefined) {
        return "Undefined Value"
    }
    else {
        return t
    }
}
let data;
data = myfunction (data);
console.log(typeof data, data)

// 6.boolean
let bool1=10;
let bool2=10
let newBool=bool1===bool2
console.log(typeof newBool,newBool);

// 7.BigInt 
let bigData=9007199254740991n;
console.log(typeof bigData ,bigData)


// Objects In JavaScript 

let myobj={
    name:"rahul",
    age:12
}

myobj.salary=3434334
console.log(typeof myobj,myobj)
console.log(myobj.name)
console.log(myobj.age)
console.log(myobj.salary)
let newsalary=myobj.salary=22323232343;
console.log(newsalary)
