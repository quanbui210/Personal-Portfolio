/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ProjectCard.scss";
import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";



const ProjectCard = ({title, description, tech, img, github, live}) => {
  return (
  <div className="card-container">
    <div className = "card">
      <div className="image">
      <img href = "#" src ={img}/>
      </div>
      <div className="content">
        <p>{description}</p>
        <p><i>{tech}</i></p>
        <a href={github}><GitHubIcon/></a>
        <a href={live}><OpenInNewIcon/></a>
      </div>
    </div> 
  </div>
  )
}

export default ProjectCard