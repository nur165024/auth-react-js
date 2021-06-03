import React, { useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthProvider';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const history = useHistory();
    const [error,setError] = useState('');

    const haldleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        try{
            setError('');
            await login(email,password);
            history.push('/');
        }catch{
            setError("login isn't successfully!");
        }
    }
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <h2>User Login page</h2>
                                    <h6>User Login page</h6>
                                </div>
                                { currentUser && currentUser.email }
                                {
                                    error && <div class="alert alert-danger" role="alert">
                                                <p>{error}</p>
                                            </div>
                                }
                                <form onSubmit={haldleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" ref={emailRef} className="form-control" id="email" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" ref={passwordRef} className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <p>Already have and account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;