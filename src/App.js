import logo from "./logo.svg";
import "./App.css";

import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="App">
      <div className="container">

        <TitleSection />

        <AboutSection />

        <ProjectsSection />

      </div>
    </div>
  );
}

export default App;
