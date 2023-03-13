import "./TechStacks.scss";
import React from "react";
import Table from "./Table";
import OtherSkills from "./OtherSkills";

const TechStacks = () => {
  return (
    <section id="tech-stack">
      <div className="container">
        <h2>Some of the Technologies that I have been recently working with</h2>
        <p>At the moment, I am focusing on becoming a Full Stack Developer with JavaScript and React for Frontend Development, 
           Java and Spring for Backend Development and Cloud with AWS
        </p>
        <div className="border">
          <Table/>
        </div>
        <p style={{fontSize:"12px", marginTop:"15px"}}>Inspired by Fabian on Codepen</p>
        <OtherSkills/>
      </div>
    </section>
  )
}

export default TechStacks