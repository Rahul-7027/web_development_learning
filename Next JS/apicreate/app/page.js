"use client"
export default function Home() {

  const handleClick = async () => {
    let data = {
      name: "rahul",
      age: 21
    }
    let a = await fetch("./api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    let res = await a.json();
    console.log(res)
  }
  return (
    <div className="container">
      <h1>Next.js API Demo</h1>

      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}
