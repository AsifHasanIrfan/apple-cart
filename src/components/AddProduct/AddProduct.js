import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './addProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            wight: data.wight,
            price: data.price,
            imageURL: imageURL
        }
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => {
            <p>product added successfully</p>
        })
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c02c3069981bf3b5935d19ccd946c94d')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(response => {
            setImageURL(response.data.data.display_url)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="container d-flex">
            <Sidebar />
            <div className="m-4">
                <h5>Add Product</h5>
                <div>
                    <form className='product-form' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <h6>Product Name</h6>
                        <input name="name" type="text" placeholder="Enter Name" required ref={register} />
                        </div>
                        <div>
                        <h6>Wight</h6>
                        <input name="wight" type="text" placeholder="Enter wight" required ref={register}  />
                        </div>
                        <div>
                            <h6>Add Price</h6>
                        <input name="price" type="text" placeholder="Enter price" required ref={register}  />
                        </div>
                        <div>
                        <h6>Add Photo</h6>    
                        <input name="file" type="file" placeholder="Upload image" onChange={handleImageUpload} required />
                        </div>
                        
                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;