import ColorForm from "./components/ColorForm";
import Box from "./components/Box";
import React, { useState } from  'react';

function App() {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
        <ColorForm color={color} setBoxes={setBoxes} boxes={boxes} setColor={setColor}></ColorForm>
        <Box color={boxes}></Box>
    </div>
  );
}

export default App;
