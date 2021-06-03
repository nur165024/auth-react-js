import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthProvider';

const SignUp = () => {
    const [error,setError] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { singup } = useAuth();
    const history = useHistory();
    
    const haldleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setError('Password do not match!');
        }
        
        try{
            setError('');
            await singup(email,password)
            history.push('/');
        }catch{
            setError('singup not successfully!');
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
                                    <h2>User SignUp page</h2>
                                    <h6>User Register page</h6>
                                </div>
                                {
                                    error && <div className="alert alert-danger" role="alert">
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
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" ref={confirmPasswordRef} className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <p>Already have and account? <Link to="/login">login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;