import React from 'react';

const Item = props =>{
    return(
        <div id="Item">
            <h2 style={{textDecoration: props.checked && "line-through"}}>{props.content}</h2>
            <input type="checkbox" value={props.checked} onChange={() => props.checkyChecky(props.i)}></input>
            <button onClick={() => props.getRidOf(props.i)}>Delete</button>
        </div>
    )
}

export default Item;