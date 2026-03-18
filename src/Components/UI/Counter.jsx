import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    backgroundColor: "darkblue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    margin: "5px"
  };

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Counter: {count}</h2>

      <button style={buttonStyle} onClick={increase}>
        Increase
      </button>

      <button style={buttonStyle} onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;