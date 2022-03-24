import React, {useEffect, useState } from  'react';
import axios from 'axios';
 import { useParams } from "react-router";
import ProductBox from '../components/ProductBox';

 const ViewProduct = (props) =>{
    const [product, setProduct] = useState([]);
    const { _id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res =>{
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    },[])
    return(
        <div>
            <ProductBox product={product}></ProductBox>
        </div>
    )
 }

 export default ViewProduct;