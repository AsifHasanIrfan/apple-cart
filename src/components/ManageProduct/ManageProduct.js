import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './manageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://salty-reef-74823.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const deleteProduct = (id) => {
        fetch(`https://salty-reef-74823.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log(result )
        })
    }

    return (
        <div className="container d-flex">
            <Sidebar />
            <div className="m-4 manage-pd">
                <h5>Manage Product</h5>
                <div className="">
                    <table>
                        <tr className="header">
                            <th>Product Name</th>
                            <th>Wight</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {
                            products.map(product => <tr className="pd-row">
                                <td>{product.name}</td>
                                <td>{product.wight} gm</td>
                                <td>${product.price}</td>
                                <FontAwesomeIcon onClick={() => deleteProduct(product._id)} className="delete-btn mt-2 mx-4" icon={faTrashAlt} />
                            </tr>)
                        }
                    </table>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;