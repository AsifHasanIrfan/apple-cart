import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo (2).png';
import './headers.css';

const Headers = () => {
    const [loggedInUser] = useContext(userContext);
    const {isSignedIn, name} = loggedInUser;
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container">
            <Link className="navbar-brand" to="/home"><img src={logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/deals">Deals</Link>
                </li>
            </ul>
            {isSignedIn ? <p className="user-name m-0">{name}</p> : <Link to="/login" className="login-btn">Login</Link>}
            </div>
        </div>
        </nav>
    );
};

export default Headers;