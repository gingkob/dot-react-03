import { useState } from 'react';
import './App.css';

let emojiArr = [
  {
    id: 'grinning face',
    value: "😀"
  },
  {
    id: 'party popper',
    value: "🎉"
  },
  {
    id: 'woman dancing',
    value: "💃"
  }
]

function App() {
  const [name, setName] = useState("")
  const handleEvent = (e) => {
    setName(e.target.id)
  }
  const displayP = false;
  return (
    <div className="container" style={{ backgroundColor: "green", width: "500px", height: "500px", margin: "80px auto" }}>
      <h1>Hello, World</h1>
      {displayP && <p>I'm writing JSX!</p>}
      <ul>
        {emojiArr.map(emoji => {
          return (
            <li key={emoji.id}>
              <button onClick={handleEvent}>
                <span role="img" aria-label={emoji.id} id={emoji.id}>{emoji.value}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="emojiNameContainer">
         <p>{name}</p>
      </div>     
    </div>
  );
}

export default App;
