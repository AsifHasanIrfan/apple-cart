import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(userContext);

    const total = orders.reduce((total, order) => total + parseInt(order.product.price), 0);
    console.log(total)

    useEffect(() => {
        fetch('https://salty-reef-74823.herokuapp.com/orders?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className="container order-bg p-4">
            <div className="order-header mb-2 text-center">
                <h3>Order Details</h3>
            </div>
            <h5>Hi, {orders[0]?.name} your order: {orders.length}</h5>
            <table className="table-bg">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Order Time</th>
                    <th scope="col">price</th>
                    </tr>
                </thead>
            {
                orders.map(order => <tbody>
                    <tr>
                    <th scope="row"><img className="pdImg" src={order.product.imageURL} alt="" /></th>
                    <td>{order.product.name}</td>
                    <td>1</td>
                    <td>{order.email}</td>
                    <td>{(new Date(order.orderTime).toDateString('MM/dd/yyyy'))}</td>
                    <td>$ {order.product.price}</td>
                    </tr>
                </tbody>)
            }
            <h6></h6>
            <tr className="pd-price">
                <td></td>  
                <td></td>     
                <td colSpan="2"></td>
                <th scope="row">Total</th>
                <td>$ {total}</td>
            </tr>
            </table>
        </div>
    );
};

export default Orders;