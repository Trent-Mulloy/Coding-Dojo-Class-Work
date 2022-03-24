import React from 'react';

const ProductBox = props =>{
    return(
        <div className='productBox'>
            <h3>Product: {props.product.title}</h3>
            <h3>Description: {props.product.description}</h3>
            <h3>Price: ${props.product.price}</h3>
        </div>
    )
}

export default ProductBox;