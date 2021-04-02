import React from 'react';
import './loadingSpiner.css'

const LoadingSpiner = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

export default LoadingSpiner;