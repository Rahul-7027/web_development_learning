"use server"
import fs from "fs/promises"
export const actionSubmit=async(e)=>{
    "use server"
    console.log(1111,e.get("name"),e.get("add"))
    let data=await fs.writeFile("rahul.txt","Hey i am good")
    console.log(data)
  }