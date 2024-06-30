
"use client"
import { actionSubmit } from "@/actions/forms";
import { useRef } from "react";
export default function Home() {

  let ref=useRef()
  return (
    <>
      <form action={(e)=>{actionSubmit(e);ref.current.reset()}} ref={ref}>
        <label htmlFor="name">First name:</label><input className="text-black mx-5" type="text" id="name" name="name" /><br />
        <label htmlFor="add">Last name:</label>
        <input className="border-r-2" type="text" id="add" name="add" /><br /> <br />
        <input type="submit" value="Submit" />
      </form>

    </>
  );
}
