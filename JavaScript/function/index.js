console.log("Welcome to make this function");


// normal function 
// function myfun(name){
// console.log(`Hey ${name} is good`)
// }

// myfun("Rahul")

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3))


// Default parameter value 
function myfun(a,b,c=3){
return a+b+c;
}

let result1=myfun(1,1);
let result2=myfun(2,2);
let result3=myfun(3,3);

console.log("The Result of these number is "+result1)
console.log("The Result of these number is "+result2)
console.log("The Result of these number is "+result3)



// Arrow function 

const newfun=(a,b)=>{
    return a-b
}

console.log(newfun(10,5))
