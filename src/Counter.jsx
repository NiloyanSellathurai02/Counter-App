import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const miniusButton = () => {
    setCount(count - 1);
  };

  const plusButton = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={miniusButton}>-</button>
      <p>{count}</p>
      <button onClick={plusButton}>+</button>
    </div>
  );
}

export default Counter;
