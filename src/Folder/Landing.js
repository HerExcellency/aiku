import React, { useState, Component, } from "react";
import { Link } from "react-router-dom";
import '../css/signup.css'



const Landing = () => {

  return (
   <div>
        <div className="divSign">
            <div className="signBoardss">
                <div className="mainLogo">
                    <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1683108520/aiku/logo_nbhtsg.png" alt="logo" />
                    <div className="whiteLine"></div>
                    <h2>AIKU</h2>
                </div>
                <div className="pre-header">
                    <Link to="/">About</Link>
                    <Link to="/">Help</Link>
                </div>
            </div>
            <form>
                <h2>His Excellency</h2>
                <button type="submit">Access AIKU</button>
                <div className="loginUser">
                    <button type="submit">Log In</button>
                    <button type="submit">New User</button>
                </div>

            </form>
        </div>
      
    </div>
  );
};

export default Landing;
