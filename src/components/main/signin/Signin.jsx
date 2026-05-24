import React from 'react'
import { useState } from "react";
import "./Signin.css"
import finebank_avatar from "./../../../assets/main_images/finebank_avatar.png"



const Signin = () => {

  

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>

      <div className="signin_page">

        <div className="finebank_avatar">
          <img src={finebank_avatar} alt="finebank_avatar" />
        </div>

        <div className="form_input">

          <div className="email">
            <h3>
              Email Address
            </h3>
            <input type="email" placeholder='johndoe@gmail.com' />
          </div>

          <div className="password">
            <div className="password_text">
              <div className="password_h3">
                <h3>Password</h3>
              </div>
              <div className="password_p">
                <h3>Forgot password?</h3>
              </div>
            </div>

            <div className="password_input_wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="●●●●●●●●●●●●●●"
              />
              <span
                className="eye_icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // Ko'z ochiq
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"          viewBox="0 0 24 24" fill="none" stroke="#4B5768"          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ) : (
                  // Ko'z yopiq
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"          viewBox="0 0 24 24" fill="none" stroke="#4B5768"          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7          0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.          5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                )}
              </span>
            </div>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" id="keepSignedIn" />
            <span className="custom-check"></span>
            Keep me signed in
          </label>

          <div className="login_button">
            <button type='submit'>
              Login
            </button>
          </div>

          <div className="line_signin">
            <img src="" alt="line_signin" />
          </div>

          <div className="button_google">
            <button type='submit'>Continue with Google</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Signin
