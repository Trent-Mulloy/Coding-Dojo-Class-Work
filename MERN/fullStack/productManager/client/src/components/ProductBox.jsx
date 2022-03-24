import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const ProductBox = props =>{
    return(
        <div className='productBox'>
            <Link to={`/view/product/${props.product._id}`}><h3>Product: {props.product.title}</h3></Link>
            <h3>Description: {props.product.description}</h3>
            <h3>Price: ${props.product.price}</h3>
        </div>
    )
}

export default ProductBox;