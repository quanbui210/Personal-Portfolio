/* eslint-disable react/react-in-jsx-scope */
import Projects from "./Components/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";
import Introduction from "./Components/Introduction/Introduction";
import TechStacks from "./Components/TechStacks/TechStacks";
import Certifications from "./Components/Certifications/Cert";
import Contact from "./Components/Contact/Contact";
import React from "react";
import Background from "./Components/Background/Background";
function App() {
  return (
    <div className="App">
      <Background></Background>
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
