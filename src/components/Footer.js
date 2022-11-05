import React from 'react';
import slack from '../assets/slack.svg';
import github from '../assets/github.svg';
import ingressive from '../assets/ingressive.svg';
import zuriLogo from '../assets/zuri_logo.svg';

function Footer() {
    return(
       <div>
     <div className="social-icons">
        <img className="small-margin" id="slack_icon" src={slack} alt="slack"/>
        <img className="small-margin" id="github_icon" src={github} alt="git"/>
      </div>
      <div className="footer">
      <img className="small-margin footer-image" id="zuri_icon" src={zuriLogo} alt="slack"/>
      <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img className="small-margin footer-image" id="ingressive_icon" src={ingressive} alt="git"/>
      </div>
      </div> 
    )
    
}
export default Footer