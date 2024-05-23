let a=6;

// function fact(num){
//     let arr=Array.from(Array(num+1).keys());
//     console.log(arr.slice(1,))
//     let c=arr.slice(1,).reduce((a,b)=>{
//         return a*b
//     })
//     console.log(c)
// }

// fact(a);


// using for loop

function forFact(num){
    let fact=1;
    for (let index = 1; index <= num; index++) {
        fact=fact*index;
    }
    console.log(fact);
}
forFact(a)