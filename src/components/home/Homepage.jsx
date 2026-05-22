import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'
import homepage_line from "./../../assets/homepage_images/homepage_line.png"

const Homepage = () => {
  return (
    <div>
      
      <div className="homepage">

        <div className="welcome">
          <h2>
            Welcome to the 
            <p>
            Finebank - Financial Management Dashboard
            </p>
          </h2>
        </div>

        <div className="text">
          <p>
            This file is totally free for personal project & 
            education purpose,
            <br /> 
            for commercial license please contact us
          </p>
        </div>

        <div className="line">
          <img src={homepage_line} alt="line" />
        </div>

        <div className="link_below">
          <p>
          To download complete dashboard click below button.
          <br />
          Don't worry, its <span>
          totally free
          </span>
          </p>
        </div>

        <div className="link_button">
          <button type='submit'>
            <p>
              <Link to="/signin">Finebank Dashboard</Link>
            </p>
          </button>
        </div>

        <div className="download_link">
          <p>
            Download more free UI Resources here
          </p>  
        </div>

      </div>

    </div>
  )
}

export default Homepage
