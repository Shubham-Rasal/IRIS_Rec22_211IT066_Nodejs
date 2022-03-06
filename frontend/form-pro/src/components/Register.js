import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import "./register.css"

const Register = () => {

  const [paas, setPaas] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isSame, setIsSame] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handlePassword = (e) => {
    setPaas(e.target.value);

  }
  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);


  }

  useEffect(() => {
    if (confirm) {
      if (confirm != paas) {
        setIsSame("not same");

      }
      else setIsSame("Same.");

    }


  }, [confirm]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    }
    const options = {
      method: 'POST',

      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch('http://localhost:8000/register', options);
    const inputErr = await response.json();
    if(inputErr)
    setError(inputErr);
    console.log(inputErr);

    
      




    





  }






  return (
    <div>
      <h1>Register</h1>
      <div className="form">
      <form name="form" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" name="username" required />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="Email " placeholder='email' required /><br />
        <label htmlFor="Password">Password</label>
        <input type="text" id="Password" onChange={handlePassword} value={paas} name="password" required />
        <br />
        <label htmlFor="Password">Confirm Password</label>
        <input type="text" id="Password" onChange={handleConfirmPassword} value={confirm} required />
        <br />
        <div className="password-match">{isSame}</div>

        <button type="submit" value="submit"  >
          Submit
        </button>

      </form>
      </div>


      <span>{error}

      </span>



      




    </div>
  )
}

export default Register;