import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loader from './Loader';

class Login extends Component {
    
    render() {
        const { authUser, redirect, loading } = this.props
        return (
            <div className="signin-page">
                <h2>Log in</h2>
                <div className="form">
                    <input className="email" placeholder="Username"/>
                    <label>Username</label>
                    <input className="pass" placeholder="Password" type="password"/>
                    <label>Password</label>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Link to="/register">Don't have an account?</Link>
                        <button onClick={(e)=> authUser()}>Log in</button>
                        {
                            loading?
                            <Loader/>:null
                        }
                    </div>
                    {
                        redirect ?
                        <Redirect  to="/me"/>:null
                    }
                </div>
            </div>
        );
    }
}

export default Login;