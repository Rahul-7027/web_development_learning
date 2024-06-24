console.log("Async/Await & Fetch API in JavaScript")

const getData=async()=>{
    let data=await fetch("https://jsonplaceholder.typicode.com/todos");
    let newData=await data.json();

    console.log(newData)
    console.log(11111,newData.map((item,index)=>{console.log(item.title)}))
}

getData();