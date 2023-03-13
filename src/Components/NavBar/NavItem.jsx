/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./NavItem.scss"

import Nav from "react-bootstrap/Nav";
import CodeIcon from "@mui/icons-material/Code";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";


import { useState } from "react";



const NavItem = () => {
  const mobile = useMediaQuery('(max-width:600px)')
  console.log(mobile)
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
    
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
    console.log(state.left, "open")
  };

  return (
    <div className='navbar'>
      <ul className='navbar--list'> 
        {mobile ?
          <>
            <Box className="menu" sx={{ flexGrow: 1 }}>
              <AppBar className="container-menu" position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer("left", true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Box>
            <Drawer
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#333" // Replace with your desired color
                }
              }}
              anchor='left'
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              className="menu-drawer"
            >
              <ul className="menu-list">
                <li><a className="menu-item" href="#intro">About Me</a></li>
                <li><a className="menu-item" href="#tech-stack">Skills</a></li>
                <li><a className="menu-item" href="#projects">Projects</a></li>
                <li><a className="menu-item" href="#cert">Certifications</a></li> 
              </ul>
            </Drawer>
          </> 
          :
          <>
            <a href="/" className='navbar--list__title'>Quan Bui <CodeIcon/>  </a> 
            <Nav bg="light" variant="light">
              <a className="navbar--list__item" href="#intro">About Me</a>
              <a className="navbar--list__item" href="#tech-stack">Skills</a>
              <a className="navbar--list__item" href="#projects">Projects</a>
              <a className="navbar--list__item" href="#cert">Certifications</a>
            </Nav>
          </>}
      </ul>
    </div>
  )
}

export default NavItem