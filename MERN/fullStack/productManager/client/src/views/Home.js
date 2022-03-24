import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductBox from '../components/ProductBox';


const Home = props =>{
    const [products, setProducts] = useState([]);

    const updateHandler = (newList) =>{
        setProducts(newList); 
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products") 
            .then(res =>{
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    },[])
    return(
        <div>
            {
                products.map((product,i)=>{
                    return <ProductBox product={product} index={i} key={i} productsList={products} onChange={updateHandler}></ProductBox>
                })
            }
        </div>
    )
}

export default Home;