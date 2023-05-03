import React, { useState } from "react";
import '../css/signup.css'
// import Logo from "./components/Logo";
// import { IoMdLock, IoIosMail, IoMdPerson } from "react-icons/io"
import { Link } from "react-router-dom";



const SignUp = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("")
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
    }  else {
      // Submit form
    }
  };

  return (
    <div className="divSign">
      <div className="signBoard">
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
            <h1>Create Account</h1>
            <p>Create a BAT Archive account here</p>
          </div>
        {/* <h2 >Sign Up</h2> */}
        {/* <div className="inputDiv">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div> */}
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
        {/* <div className="inputDiv">
          <IoMdLock />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}
        
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
        {errorMessage && <div>{errorMessage}</div>}
        <div className="signupAction">  
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
