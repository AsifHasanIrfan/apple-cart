import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './login.css';
import googleIcon from '../../images/Group 573.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        photo:''
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            setLoggedInUser(signedInUser);
            setUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorMessage, email)
        });
    }
    
    return (
        <div className="container d-flex justify-content-center login">
            <button className="login-btn" onClick={handleGoogleSingIn}><img src={googleIcon} alt="" /> Continue With Google</button>
        </div>
    );
};

export default Login;