import React from 'react';

const Box = (props) =>{
    return(
        <div style={{display: 'flex'}}>
            {
                props.color.map((color,i)=>
                <div style={{background: color, height:50, width:50}}></div>)
            }
        </div>
    )
}

export default Box;