import logo from "./logo.svg";
import "./App.css";


import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

import Container from "./components/Container";


function App() {
  return (
    <div className="App">

      <Container>

        <TitleSection />

        <AboutSection />

        <ProjectsSection />

      </Container>
      
    </div>
  );
}

export default App;
