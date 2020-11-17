import logo from "./logo.svg";
import "./App.css";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title-section">
          <h1>{data.title}</h1>

          <h2>{data.subtitle}</h2>
        </div>

        <div className="about-section"></div>

        <div className="projects-section"></div>
      </div>
    </div>
  );
}

export default App;
