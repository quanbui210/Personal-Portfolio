/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./Table.scss";
import React from "react";
const skills = [
  {
    title: "JavaScript",
    icon: "skill-icon devicon-javascript-plain colored",
    percentage: 75,
    bar: "bar one"
  },
  {
    title: "Java",
    icon: "skill-icon devicon-java-plain colored",
    percentage: 60,
    bar: "bar one"
  },
  {
    title: "Spring Boot",
    icon: "skill-icon devicon-spring-plain colored",
    percentage: 45,
    bar: "bar two"
  },
  {
    title: "React",
    icon: "skill-icon devicon-react-original colored",
    percentage: 75,
    bar: "bar one"
  },
  {
    title: "HTML5 / CSS",
    icon: "skill-icon devicon-html5-plain colored",
    percentage: 75,
    bar: "bar one"
  },
  {
    title: "Redux",
    icon: "skill-icon devicon-redux-plain colored",
    percentage: 75,
    bar: "bar one"
  },
  {
    title: "TypeScript",
    icon: "skill-icon devicon-typescript-plain colored",
    percentage: 45,
    bar: "bar two"
  },
  {
    title: "Node / Express",
    icon: "skill-icon devicon-nodejs-plain-wordmark colored",
    percentage: 60,
    bar: "bar one"
  },

]

const Table = () => {
  return (
    <>
      <table>
        <thead>
        </thead>
        <tbody>
          {skills.map(skill => (
            <tr>
              <td>{skill.title} 
                <i className={skill.icon}></i>
              </td>
              <td><span className="percent">{skill.percentage}%</span>
                <div className={skill.bar}>
                  <div className="fill" style={{width: `${skill.percentage}%`}}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </>
  )
}

export default Table