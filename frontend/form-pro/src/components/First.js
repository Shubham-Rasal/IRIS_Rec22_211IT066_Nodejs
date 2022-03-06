import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import "./first.css";

const First = () => {
    return (
        <div>
           


            <div className="container">
                <div className="login" >
                    <Link to="/login" className='login'>
                        Login
                    </Link>
                </div>
                <div className="register" >
                   <Link to="/register"  className="register" >
                       Register
                   </Link>
                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default First;