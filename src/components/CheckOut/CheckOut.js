import { format } from 'date-fns/esm';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Headers from '../Headers/Headers';
import './checkOut.css';

const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser] = useContext(userContext);
    const [product, setProduct] = useState({})
    const {name, price} = product;
    
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    }, [])
    
    const handleCheckout = () => {
        const checkOutDetails = {...loggedInUser, product: product, orderTime: format(new Date(),'MM.dd.yyyy')}

        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(checkOutDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order has been checkOut')
            }
        })
    }

    return (
        <div>
            <Headers />
            <div className="container mt-5">
                <h3>Checkout</h3>
                <table className="table table-success table-striped rounded-5">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>1</td>
                        <td>$ {price}</td>
                        </tr>
                        <tr>
                        <th scope="row">Total</th>
                        <td colSpan="2"></td>
                        <td>$ {price}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleCheckout} className="check-out-btn">Checkout</button>
            </div>
        </div>
    );
};

export default CheckOut;