import "./Introduction.scss"

import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';



export default function Introduction() {
  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    setShowIntro(true);
  }, []);

  return (
    <div>
      <section className="intro" id="intro"> 
      <CSSTransition in={showIntro} timeout={1000} classNames="intro-slide">
        <h1 className="intro-title">Hi, My name is Quan Bui, I build and design Web Applications. </h1>
      </CSSTransition>
      <CSSTransition in={showIntro} timeout={1500} classNames="intro-slide-delay">
        <p className="intro-description">An highly adaptable web developer with a huge passion in coding, designing and working with websites. 
       </p>
      </CSSTransition>
      <CSSTransition CSSTransition in={showIntro} timeout={2000} classNames="intro-slide-delay-long">
        <div className='icon-container'>          
          <a href="https://github.com/quanbui210" className='intro-icon'>
            <i className="devicon-github-plain colored"></i>
          </a>
          <a href='https://www.linkedin.com/in/quan-bui-0a4908209/' className='intro-icon'>
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <a href='facebook.com' className='intro-icon'>
            <i className="devicon-facebook-plain colored"></i>
          </a>
          <a href='facebook.com' className='intro-icon'>
            <i className="devicon-gmail-plain colored"></i>
          </a>
        </div>
      </CSSTransition>
      </section>
    </div>
  )
}