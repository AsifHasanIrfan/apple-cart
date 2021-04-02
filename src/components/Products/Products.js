import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './product.css';

const Products = (props) => {
    const { name, price, imageURL, _id } = props.product;
    const history = useHistory();

    const handleOrders = () => {
        history.push("/orders")
    }

    return (
        <div className="col-md-4 col-lg-3">
            <div className="card mb-3 pd-card">
            <img src={imageURL} className="card-img-top" alt="" />
            <div className="card-body">
                <h4>{name}</h4>
                <div className="d-flex justify-content-between mt-3">
                    <h4 className="mb-0">${price}</h4>
                    <Link className="buy-btn" to={`/checkout/${_id}`} onClick={handleOrders}>Buy Now</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Products;