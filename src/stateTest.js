//Used this component while learning state
import React, { useState } from "react";

function Toggle() {
  // Step 3: Define a state variable and its initial value
  const [isOn, setIsOn] = useState(false);

  // Step 4: Create a function to handle the toggle
  const handleToggle = () => {
    setIsOn(!isOn); // Step 5: Update the state by toggling its value
  };

  return (
    <><h1>HI</h1>
    <div>
      {/* Step 6: Display the button and its state */}
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"} {/* Display "ON" or "OFF" based on the state */}
      </button>
    </div>
    </>
  );
}

export default Toggle;
