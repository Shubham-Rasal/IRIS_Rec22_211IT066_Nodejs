import React from 'react'

const Login = () => {



async function handleSubmit(e)
{

  e.preventDefault();
  console.log(e.target[0].value,e.target[1].value);
  const userData = {
    username: e.target[0].value,
    password: e.target[1].value,
  }
  const options = {
    method: 'POST',

    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    }
  };
  const response = await fetch('http://localhost:8000/login', options);
  const data = await response.json();
  
console.log(data);
}
  return (
    <div>

      <h2>Login</h2>

      <form name="form" onSubmit={handleSubmit}>
          <label htmlFor="Username">Username</label>
          <input type="text" id="Username" name="username" required />
          <br />
         
          <label htmlFor="Password">Password</label>
          <input type="text" id="Password"  name="password" required />
          <br />
          

          <button type="submit">Login</button>
          
        

        </form>




    </div>
  )
}

export default Login    