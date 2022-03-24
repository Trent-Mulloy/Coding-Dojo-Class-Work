import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddProduct = (props) =>{
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: null,
    });

    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", form);
    }

    return(
        <div className='w-30 mx-auto my-4'>
            <h2>Fill Out The Form To Add A Product!</h2>
            <form className='w-25 mx-auto mt-4' onSubmit={onSubmitHandler}>
                <div className='form-group' >
                    <label htmlFor='Title'><h2>Product Name:</h2></label>
                    <input type='text' name='title' className='form-control' onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='Description'><h2>Description:</h2></label>
                    <input type='text' name='description' className='form-control' onChange={onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='Price'><h2>Price:</h2></label>
                    <input type='number' name='price' className='form-control' onChange={onChangeHandler}/>
                </div>
                <input type='submit' value='Add Product' className=' btn btn-dark my-4'></input>
            </form>
        </div>
    )
}

export default AddProduct;