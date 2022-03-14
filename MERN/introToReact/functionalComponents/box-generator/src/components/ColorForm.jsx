import React, { useState } from  'react';

const ColorForm = props =>{
    const [color, setColor] = useState("");


    const createBox = (e) =>{
        e.preventDefault();
        const newBox = {color};
        setColor("");
    }

    return(
        <div>
            <form onSubmit={createBox}>
                <label>Color: </label> 
                <input value={color} type="text" onChange={ (e) => setColor(e.target.value) } />
                <input type="submit" value="Create Box" />
            </form>
        </div>
    )
}

export default ColorForm;