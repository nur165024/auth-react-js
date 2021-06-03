import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthProvider';

const Dashboard = () => {
    const { logout,currentUser } = useAuth();
    const [error,setError] = useState('');
    const history = useHistory();

    const handleClickLogout = async () => {
        try{
            setError('');
            await logout()
            history.push('/login')
        }catch{
            setError('Logout is not successfully!');
        }
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5">
                        <div className="card">
                            { 
                                error && <div className="alert alert-danger" role="alert">
                                            <p>{error}</p>
                                        </div>
                            }
                            <h5 className="card-header">This is your Dashboard</h5>
                            <div className="card-body">
                                <h5 className="card-title">Email : { currentUser.email } </h5>
                                <button onClick={handleClickLogout} className="btn btn-primary">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;