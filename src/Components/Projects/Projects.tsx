import ProjectCard from "./ProjectCard.jsx";
import "./Projects.scss"
import projectImg from "../../assets/project-management.png"

import React from "react";


const projects = [
  {
    title: "Library Management",
    description: "Full stack library project, can be logged in as an user or admin with different functionalities. (Read more on github)",
    techstacks: "SpringBoot | Java | PostgreSQL | React | TypeScript | Docker | Redux Toolkit | Hibernate",
    img: "https://user-images.githubusercontent.com/89993167/252905770-4e755f03-98dd-4eca-b4c4-5cc1884bcdad.png",
    github: "https://github.com/quanbui210/Library-Management",
    live: "https://library-quanbui.netlify.app/"
  },
  {
    title: "Sunrob e-commerce",
    description: "Demo Shopping Website for Sunrob Robotics (Frontend), a robotic company in Lappeenranta (Merchs / Toys).",
    techstacks: "React | Redux Toolkit | MUI | Firebase | Axios",
    img: "https://user-images.githubusercontent.com/89993167/211213062-6ef79442-648a-4b34-9c9a-89609e07ef4e.png",
    github: "https://github.com/quanbui210/Sunrob-Robotics",
    live: "https://sunrob-robotics.vercel.app/"
  },
  {
    title: "Countries",
    description: "Website contains basic information of all countries in the world. Using restcountries API.",
    techstacks: "React | MUI | RestcountriesAPI | Axios",
    img: "https://user-images.githubusercontent.com/89993167/212177018-aaa6b18a-bcf0-4910-9e57-d52fec735014.png",
    github: "https://github.com/quanbui210/country",
    live: "https://countries-quanbui210.vercel.app/"
  },
  {
    title: "Weather",
    description: "A Weather app where users can get the weather data from their current location as well as search for weather information of any city in the world.",
    techstacks: "React | Axios | MUI | Bootstrap",
    img: "https://user-images.githubusercontent.com/89993167/199535913-de636ad2-5eb6-4183-9449-b6ec4509c32e.png",
    github: "https://github.com/quanbui210/Weather-App-React",
    live: "https://weather-app-api-assignment.netlify.app/"
  },
]


const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{marginBottom: "60px", fontWeight: "680"}}>
        Projects <img src={projectImg} alt="project img"/>
      </h2>
      <div className="p-container">
      {projects.map(project => (
        <ProjectCard
          title={project.title}
          key={project.title}
          description={project.description}
          tech={project.techstacks}
          img={project.img}
          github={project.github}
          live={project.live}
        />
      ))}
      </div>
      <h3 className='project-card-seemore'>See more projects <a className='tag' href="https://github.com/quanbui210">here</a></h3>
    </section>
  )
}

export default Projects 