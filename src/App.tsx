/* eslint-disable react/react-in-jsx-scope */
import Projects from "./Components/Projects/Projects.tsx";
import NavBar from "./Components/NavBar/NavBar";
import Introduction from "./Components/Introduction/Introduction";
import TechStacks from "./Components/TechStacks/TechStacks.tsx";
import Certifications from "./Components/Certifications/Cert.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import React from "react";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Introduction/>
        <TechStacks/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
