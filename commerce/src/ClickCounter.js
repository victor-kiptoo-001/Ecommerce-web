  import React, { useState } from 'react';
  
  const ClickCounter = () => {
    // State to hold the click count
    const [count, setCount] = useState(0);
  
    // Function to increment the count
    const handleButtonClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h1>Click Counter</h1>
        <p>Number of clicks: {count}</p>
        <button onClick={handleButtonClick}>Click me</button>
      </div>
    );
  };
  
  export default ClickCounter;