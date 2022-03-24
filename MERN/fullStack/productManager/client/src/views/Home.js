import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductBox from '../components/ProductBox';
import NavBar from '../components/NavBar';

const Home = props =>{
    const [products, setProducts] = useState([]);

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
                    return <ProductBox product={product} key={i}></ProductBox>
                })
            }
        </div>
    )
}

export default Home;