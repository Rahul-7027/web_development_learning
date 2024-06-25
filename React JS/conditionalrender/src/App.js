import './App.css';
import { useState } from 'react';

function App() {

  const [btn, setbtn] = useState(false)
  const [data, setData] = useState([

    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    },
    {
      "title": "1984",
      "author": "George Orwell"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville"
    }
  ]
  )
  const btnHandle = () => {
    if (btn === false) {
      setbtn(true)
    }
    else {
      setbtn(false)
    }

    // {btn===false?setbtn(true):setbtn(false)}
  }
  return (
    <div className="App">
      {btn ? "Show Button is true" : "Hide Button is false"}&nbsp;&nbsp; <br />
      {<button onClick={btnHandle}>Toggle Button</button>}

      {data && data.map((item, index) => {
        return (
          <div key={index}>
            {console.log(1111, item,index)}
            <strong>{item.title}</strong>
            <p>{item.author}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
