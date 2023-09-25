import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'


function Login() {
    const navigator = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const login = () =>{
    let user = {
        email,
        password
    }
    console.log("user",user)
    localStorage.setItem("user", JSON.stringify(user))
    navigator("/welcome")
  }
    
  return (
    <div className="container">
    <div className="forms">
      <div className="form login">
        <span className="title">Login</span>
        <form action="#">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your email"
              id="signInEmail"
              required=""
              value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <i className="uil uil-envelope icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              className="password"
              placeholder="Enter your password"
              required=""
              id="signInpassword"
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
            <i className="uil uil-lock icon" />
            <i className="uil uil-eye-slash showHidePw" />
          </div>
          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" id="logCheck" />
              <label htmlFor="logCheck" className="text">
                Remember me
              </label>
            </div>
            <a href="#" className="text">
              Forgot password?
            </a>
          </div>
          <div className="input-field button">
            <input type="button" id="signInBtn" defaultValue="Login" onClick={login}/>
          </div>
        </form>
        <div className="login-signup">
          <span className="text">
            Not a member?
            <a href="#" className="text signup-link">
              Signup Now
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Login
