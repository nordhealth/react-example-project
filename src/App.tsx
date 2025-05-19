import { useState } from "react";
import './App.css'
import type { Input } from "@nordhealth/components";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function handleNameChange(e: React.ChangeEvent<Input>) {
    setName(e.target.value);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <nord-input label="Your name" value={name} onInput={handleNameChange}></nord-input>
      <p>{name}</p>

      <nord-button variant="primary" onClick={increment}>
        Count: {count}
      </nord-button>
    </>
  );
}

export default App