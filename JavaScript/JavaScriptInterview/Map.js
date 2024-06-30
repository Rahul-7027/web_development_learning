let arr=["Ram","Shyam","Amit","Submit","Priyanka","Rahul","Jyoti","Neha","Priya"];

let itretae=async()=>{
let newData=await arr;
setTimeout(() => {
    newData
}, 5000);
// console.log(newData)
}
let afterItreate=itretae();
console.log(afterItreate)