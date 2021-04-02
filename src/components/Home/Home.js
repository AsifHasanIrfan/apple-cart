import React, { useEffect, useState } from 'react';
import Headers from '../Headers/Headers';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="home-bg">
            <Headers />
            <nav className="navbar container mt-4">
            <div className="container-fluid">
                <form className="d-flex mx-auto">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center">
                {
                    products.length === 0 && <LoadingSpiner />
                }
                {
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;