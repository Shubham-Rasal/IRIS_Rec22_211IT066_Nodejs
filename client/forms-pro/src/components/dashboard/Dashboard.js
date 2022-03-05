import React from 'react';
import Newform from './Newform';
import {Link,Outlet} from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
    <h2>Dashboard</h2>
    <div className="old-forms">
        Old Forms and Responses
    </div>
    <div className="new-form">
  <Link to="/dashboard/newform">
      New Form
  </Link>
           


    </div>


    </>
  )
}

export default Dashboard;