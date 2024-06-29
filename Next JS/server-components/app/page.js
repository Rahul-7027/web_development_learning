// "use client"
// import { useState } from "react";
import Nav from "@/component/Navbar/Nav"
import fs from "fs/promises"

export default function Home() {
  // const [count, setcount] = useState(0)

  let a = fs.readFile('.gitignore')
  a.then((e) => console.log(e.toString()))
  console.log("Hello world")
  return (
    <div>
      <Nav />

      i am a component <br /> <br />
      {/* <button onClick={()=>{setcount(count+1)}}>Count is {count}</button> */}
    </div>
  );
}
