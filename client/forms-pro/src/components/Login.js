import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form action="submit">
          <label for="Username">Username</label>
          <input type="text" id="Username" name="username" />
          <br />
          <label for="Password">Password</label>
          <input type="text" id="Password" name="password" />
          <br />
          <button type="submit" value="submit" />

        </form>
      </div>
    </div>
  )
}

export default Login;