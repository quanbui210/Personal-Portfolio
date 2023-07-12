import "./TechStacks.scss";
import React from "react";
import Table from "./Table.tsx";
import OtherSkills from "./OtherSkills.tsx";
import techImg from "../../assets/code64.png"

const TechStacks = () => {
  return (
    <section id="tech-stack">
      <div className="container">
        <h2>Skills & Technologies <img src={techImg} alt="img"/> </h2>
        <p>Some of the technologies that I&apos;ve been recently working with
        </p>
        <div className="border">
          <Table/>
        </div>
        <OtherSkills/>
      </div>
    </section>
  )
}

export default TechStacks