import { useState } from 'react'

import Navbar from "./Components/Navbar.jsx"
import HeroSection from "./Components/HeroSection.jsx"
import SocialIcon from "./Components/Social Icon.jsx"
import Projects from "./Components/Projects.jsx"
import SkillsSection from "./Components/SkillsSection.jsx"
import WorkExperience from "./Components/WorkExperience.jsx"


import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <SkillsSection/>
      <WorkExperience />
      <Projects />
      <SocialIcon />
    </>
  )
}

export default App
