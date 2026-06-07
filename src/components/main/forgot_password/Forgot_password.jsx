import React from 'react'
import finebank_avatar from "./../../../assets/main_images/finebank_avatar.png"

const Forgot_password = () => {
  return (
    <div>
      
      <div className="forgot_password">

        <div className="finebank_avatar">
          <img src={finebank_avatar} alt="finebank_avatar" />
        </div>

        <div className="h3_password">
          <h3>
            Forgot Password?
          </h3>

          <p>
            Enter your email adress to get the password reset link
          </p>

          <div className="email_adress">
            <h3>
              Email Address
            </h3>

            <input type="email" placeholder='hello@example.com' />

            <button type='submit'>
              Password Reset
            </button>

            <div className="link_h3">
              <h3>
                Back to log in
              </h3>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Forgot_password
