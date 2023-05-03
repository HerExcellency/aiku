import React, { useState } from "react";
// import './css/signup.css'
import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
     if (email === "") {
      setErrorMessage("Please enter an email address.");
    } else if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
    } else if (password === "") {
      setErrorMessage("Please enter a password.");
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
    } else {
      // Submit form
    }
  };

  return (
   <div>
    <div className="divSign">
      <div className="signBoard">
        {/* <Logo /> */}
        <div className="pre-header">
          <Link to="/">About</Link>
          <Link to="/">Help</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="subHeader">
          <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1683108520/aiku/logo_nbhtsg.png" alt="logo" />
          <div className="whiteLine"></div>
          <h2>AIKU</h2>
        </div>
        <div className="welcomeBackHead">
          <h1>Welcome Back</h1>
          <p>Please login to The BAT Archive with your email address</p>
        </div>
        <div className="inputDiv">
          {/* <IoIosMail /> */}
          <input          
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <div className="inputDiv">
          {/* <IoMdLock /> */}
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
        </div>

        <div style={{display: 'flex'}} className="forgetPassword">
          <div className="radioDiv">
            <input
              type="radio"
              name="terms"
              value="accepted"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.value)}

            />
            <label htmlFor="terms">I accept the Terms and Conditions</label>
          </div>

          <p>forgot password?</p>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <div className="signupAction">  
          <button type="submit">Log In</button>
          {/* <p>Are you a new User? <Link to="/LogIn">Login</Link></p> */}
        </div>

        
      </form>
   </div>
   </div>
  );
};

export default Login;
