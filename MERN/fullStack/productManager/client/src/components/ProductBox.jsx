import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const ProductBox = props =>{
    const history = useHistory();

    const onDeleteHandler = (_id, index) =>{
        console.log(_id, index)
        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
            .then(res=>{
                console.log(res)
                history.push("/")
                const copyList = [...props.productsList]
                copyList.splice(index,1);
                props.onChange(copyList);
            })
            .catch(err=>console.log(err))
    }
    return(
        <div className='productBox'>
            <Link to={`/view/product/${props.product._id}`}><h3>Product: {props.product.title}</h3></Link>
            <h3>Description: {props.product.description}</h3>
            <h3>Price: ${props.product.price}</h3>
            <h4>Options: <button onClick={()=>onDeleteHandler(props.product._id, props.index)} className='btn btn-link btn-lg'>Delete</button>||<Link className='btn btn-link btn-lg' to={`/edit/product/${props.product._id}`}>Edit</Link></h4>
        </div>
    )
}

export default ProductBox;