import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Star Wars Character Editor</h1>

      <button onClick={handleClick}>
      You pressed me {count} times
      </button>

    </div>

  );
}

export default App;
