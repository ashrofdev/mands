import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loader from './Loader';


class Register extends Component {
    
    render() {
        const { register, redirect, loading } = this.props
        return (
            <div className="register-page">
                <h2>Register Now</h2>
                <div className="form">
                    <input className="fullname" placeholder="Fullname"/>
                    <label>Fullname</label>
                    <input className="username" placeholder="Username"/>
                    <label>Username</label>
                    <input className="btc_address" placeholder="BTC address"/>
                    <label>BTC address</label>
                    <input className="mail" placeholder="Email" type="email"/>
                    <label>Email</label>
                    <input className="password" placeholder="Password" type="password"/>
                    <label>Password</label>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Link to="/signin">Already have an account?</Link>
                        <button onClick={register}>Sign up</button>
                        {
                            loading?
                            <Loader/>:null
                        }
                    </div>
                    {
                        redirect ?
                        <Redirect to="/me"/>:null
                    }
                </div>
            </div>
        );
    }
}

export default Register;