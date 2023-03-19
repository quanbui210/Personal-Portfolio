import "./Introduction.scss"
import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Introduction() {
  return (
    <div>
      <section className="intro" id="intro">  
        <h1 className="intro-title">Hi, My name is Quan Bui, I build and design Web Applications. </h1>
        <p className="intro-description">An highly adaptable web developer with a huge passion in coding, designing and working with websites. 
          Foucsing on Frontend Development with #React and Backend Technologies like #Java</p>
        <div className='icon-container'>          
          <a href="https://github.com/quanbui210" className='intro-icon'><GitHubIcon/></a>
          <a href='https://www.linkedin.com/in/quan-bui-0a4908209/' className='intro-icon'><LinkedInIcon/></a>
          <a href='facebook.com' className='intro-icon'><FacebookIcon/></a>
        </div>
      </section>
    </div>
  )
}