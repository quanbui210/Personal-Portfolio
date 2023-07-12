import "./TechStacks.scss";
import React from "react";
import Table from "./Table.tsx";
import OtherSkills from "./OtherSkills.tsx";

const TechStacks = () => {
  return (
    <section id="tech-stack">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p>Some of the technologies that I&apos;ve been recently working with
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