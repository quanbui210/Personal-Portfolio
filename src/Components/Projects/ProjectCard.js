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
      <Card className="project-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="Project Img"
          className='project-card-image'
        />
        <CardContent className='project-card-content'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="project-card-text">
            <i>{description} </i><br/>
            <p className="project-card-tech">{tech}</p>
          </Typography>
        </CardContent>
        <CardActions className='project-card-content'>
          <a href={github} className='project-card-icon'><GitHubIcon/></a> 
          <a className='project-card-icon' href={live}><OpenInNewIcon/></a>
        </CardActions>
      </Card>  
    </div>
  )
}

export default ProjectCard