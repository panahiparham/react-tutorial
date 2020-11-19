import logo from "./logo.svg";
import "./App.css";

import { Element } from "react-scroll";

import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Element name="home" />

        <TitleSection />

        <Element name="about" />

        <AboutSection />

        <Element name="projects" />

        <ProjectsSection />
      </Container>
    </div>
  );
}

export default App;
