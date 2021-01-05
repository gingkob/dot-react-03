import { useState } from 'react';
import Emoji from './components/Emoji';
import Instruction from "./components/Instruction";
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
  return (
    <div className="container" style={{ backgroundColor: "green", width: "500px", height: "500px", margin: "80px auto" }}>
      <h2>Emoji component</h2>
      <ul>
        {emojiArr.map(emoji => 
          <Emoji id={emoji.id} value={emoji.value} onClick={handleEvent} />
        )}
      </ul>
      <Instruction />
      <div className="emojiNameContainer">
         <p>{name}</p>
      </div>     
    </div>
  );
}

export default App;
