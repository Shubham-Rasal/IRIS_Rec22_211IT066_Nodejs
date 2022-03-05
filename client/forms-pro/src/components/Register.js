import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const [paas, setPaas] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isSame, setIsSame] = useState("");

  const handlePassword = (e) => {
    setPaas(e.target.value);

  }
  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  

  }

  useEffect(() => {
    if (confirm) {
      if (confirm!=paas)
      {
        setIsSame("not same");

      }
      else setIsSame("Same.");

    }
  
    
  }, [confirm]);
  








  return (
    <div>
      <h1>Register</h1>
      <form name="form" action="http://localhost:8000/register" method="POST">
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" name="username" required />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="Email " required /><br />
        <label htmlFor="Password">Password</label>
        <input type="text" id="Password" onChange={handlePassword} value={paas} name="password" required />
        <br />
        <label htmlFor="Password">Confirm Password</label>
        <input type="text" id="Password" name="password" onChange={handleConfirmPassword} value={confirm} required />
        <br />
        <div className="password-match">{isSame}</div>  
        
        <button type="submit" value="submit"  >
          Submit 
        </button>

      </form>

      <Link to="/dashboard">Dashboard</Link>




    </div>
  )
}

export default Register;