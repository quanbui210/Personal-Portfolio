import ProjectCard from "./ProjectCard";
import "./Projects.scss"

import React from "react";

import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const projects = [
  {
    title: "Sunrob WebShop",
    description: "Demo Shopping Website for Sunrob Robotics (Frontend), a robotic company in Lappeenranta (Merchs / Toys).",
    techstacks: "React | React-router | Redux Toolkit | MaterialUI & Bootstrap | Firebase Realtime Database | Axios",
    img: "https://user-images.githubusercontent.com/89993167/211213001-6c01ad3e-acfb-40a2-81b4-5b30335ec04f.png",
    github: "https://github.com/quanbui210/Sunrob-Robotics",
    live: "https://sunrob-robotics.vercel.app/"
  },
  {
    title: "Countries",
    description: "Website contains basic information of all countries in the world. Using restcountries API.",
    techstacks: "React | Material UI | React Router | Axios",
    img: "https://user-images.githubusercontent.com/89993167/212177018-aaa6b18a-bcf0-4910-9e57-d52fec735014.png",
    github: "https://github.com/quanbui210/country",
    live: "https://countries-quanbui210.vercel.app/"
  },
  {
    title: "Weather",
    description: "A Weather app where users can get the weather data from their current location as well as search for weather information of any city in the world.",
    techstacks: "React | Axios | Material UI | Bootstrap",
    img: "https://user-images.githubusercontent.com/89993167/199535913-de636ad2-5eb6-4183-9449-b6ec4509c32e.png",
    github: "https://github.com/quanbui210/Weather-App-React",
    live: "https://weather-app-api-assignment.netlify.app/"
  },
]


const Projects = () => {
  return (
    <section id="projects">
      <h2>
                My Projects
        <IntegrationInstructionsIcon style={{fontSize: "42px", marginTop:"-8px"}}/>
      </h2>
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
      <h3 className='project-card-seemore'>See more projects <a className='tag' href="https://github.com/quanbui210">here</a></h3>
    </section>
  )
}

export default Projects 