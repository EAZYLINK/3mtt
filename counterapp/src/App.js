import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('')

  const increment = () => {
    if (count >= 100) {
      setErrorMessage("You've reached the limit!");
      return
    }
    setErrorMessage('');
    setCount(count => count + 1);
  }

  const decrement = () => {
    if (count <=0 ) {
      setErrorMessage("You've reached the limit!");
      return;
    }
    setErrorMessage('');
    setCount(count => count - 1);
  }

  return (
    <div className="App">
      <p>Count: {count} </p>
      <div><i>{errorMessage}</i></div>
      <button onClick={() => increment()}>Increase</button>
      <button onClick={() => decrement()}>Decrease</button>
    </div>
  );
}

export default App;
