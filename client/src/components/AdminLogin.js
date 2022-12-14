import React from 'react';
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();

    //handleSubmit is a function that is passed to the form component
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        navigate('/dashboard', { replace: true });
    }

  return (
    <div className="admin-login">
        <div className="left"> 
            <img src={require('../images/logo.png')} alt="logo" width="250px" />
           {/*<p>Automating the process of finding a Nanny</p>*/}
            
        </div>
        <div className="right">
            <h2>Welcome Admin</h2>
            <p>Please login to access the admin area</p>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="password" placeholder="Enter admin password" />
                <input type="submit" value="Login" />
            </form>

        </div>
    </div>
  )
}

export default AdminLogin