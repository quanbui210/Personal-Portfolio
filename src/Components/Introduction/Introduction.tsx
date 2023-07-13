import "./Introduction.scss"

import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';

import cv from "../../assets/cv.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import gmail from "../../assets/gmail.png"
import github from "../../assets/github.png"
import resume from "../../assets/resume.pdf"
import boy from "../../assets/boy.png"




export default function Introduction() {
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    setShowIntro(true);
  }, []);

  const handleDownload = () => {
    window.open(resume, '_blank')
  }

  return (
    <div>
      <section className="intro" id="intro"> 
      <div className="intro-cont">
      <CSSTransition in={showIntro} timeout={1000} cxlassNames="intro-slide">
        <h1 className="intro-title">Hi, My name is Quan Bui, <br/> I build and design Web Applications  </h1>
      </CSSTransition>
      <CSSTransition in={showIntro} timeout={1200} classNames="intro-slide-img">
        <img className="intro-img" src={boy} alt="" />
      </CSSTransition>
      </div>
      <CSSTransition in={showIntro} timeout={1500} classNames="intro-slide-delay">
        <p className="intro-description">A highly adaptable web developer with a huge passion in coding, designing and working with websites. 
       </p>
      </CSSTransition>
      <CSSTransition CSSTransition in={showIntro} timeout={2000} classNames="intro-slide-delay-long">
        <div className='icon-container'>          
          <button className='intro-icon reset'>
            <a href="https://github.com/quanbui210"><img src={github} alt="" /></a>
          </button>
          <button className='intro-icon reset'>
            <a href='https://www.linkedin.com/in/quan-bui-0a4908209/'><img src={linkedin} alt="" /></a>
          </button>
          <button className='intro-icon reset'>
            <a href="mailto:quanbui021001@gmail.com"><img src={gmail} alt="" /></a>
          </button>
          <button className='intro-icon reset'>
            <a href='facebook.com'><img src={facebook} alt="" /></a>
          </button>
          <button onClick={handleDownload} className='intro-icon reset'>
            <i><img src={cv} alt="" /></i>
          </button>
        </div>
      </CSSTransition>
      </section>
    </div>
  )
}