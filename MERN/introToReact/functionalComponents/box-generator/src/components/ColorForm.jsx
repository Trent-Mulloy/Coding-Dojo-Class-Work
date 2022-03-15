import React, { useState } from  'react';
import Box from './Box';


const ColorForm = props =>{
    // const [color, setColor] = useState("");
    // const [boxes, setBoxes] = useState([]);
    const {boxes, setBoxes, color, setColor} = props


    const createBox = (e) =>{
        e.preventDefault();
        setBoxes([...boxes, color])
        setColor("");
    }

    return(
        <div>
            <form onSubmit={createBox}>
                <label>Color: </label> 
                <input value={color} type="text" onChange={ (e) => setColor(e.target.value) } />
                <input type="submit" value="Create Box" />
            </form>
            {/* <Box color={boxes}></Box> */}
        </div>
    )
}

export default ColorForm;