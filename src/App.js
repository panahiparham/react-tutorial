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

        <div className="about-section">
          <h3>{data.sections[0].title}</h3>

          <p>{data.sections[0].items[0].content}</p>
        </div>

        <div className="projects-section">
          <h3>{data.sections[1].title}</h3>

          <h4>{data.sections[1].subtitle}</h4>

          {data.sections[1].items.map((project) => {
            return (
              <div className="project">
                <h4>
                  <a href={project.content.link}>{project.content.title}</a>
                </h4>

                <p>{project.content.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
