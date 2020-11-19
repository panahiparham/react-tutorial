### Step 5 . Adding Scrolling Buttona

In this last section of actual coding i want to add little arrow buttons to the end of each section which scrolls down the page when clicked. To do this we need scrolling functionality thankfully this is readily available to us. If you search for "react scroll" one of the first links will be this [github page](https://github.com/fisshy/react-scroll) . In the readme section of that page it is explained how the project works, the import bits are :

<br />

* To install the package run the `npm install react-scroll` inside our project folder, let's do that now.

<br />

* The two important components in react-scroll that we'll be using are `Link` and `Element`. the way it works is that you add `Element` components to your page and then add `Link` component, when the `Link` is clicked the page will automatically scroll to where the `Element` is located. 

<br />

This is what `Element`s and `Link` look like. Notice the "place_to_scroll" value and how it connects the two tags.

<br />

```
  <Element name="place_to_scroll" className="element">
    

  </Element>
```

<br />

```
<Link activeClass="active" to="place_to_scroll" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </Link>
```

<br />

Let's add some `Element`s to the page, we want to scroll to the start of the next page which each click, so we have to add `Element`s to the start of each page. Head into `App.js` and import, `import { Element } from "react-scroll";` . Then add three elemets like the code below, 

<br />

```

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

```

<br />

Next we need actual buttons to click, as you might remember we've added thier icons to `public/images` and that paths to `data.json` when we craated `data.json`. Now go into `src/components` and create `Button.js`

<br />

```
  import React, { Component } from "react";

  import "./Button.css";

  import { Link } from "react-scroll";

  export default class Button extends Component {
    render() {
      const { icon, goto, className } = this.props;

      return (
        <div className={`button ${className}`}>
          <Link
            activeClass="active"
            to={goto}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <img src={icon} alt="button" style={{maxWidth:"30px"}}/>
          </Link>
        </div>
      );
    }
  }


```

<br />

I've set 3 props for Button component to set the "to" property of Link and "src" of the image and also to add a secondary "className" to each Element. I also imported `Button.css` which we will create now.

<br />

```
.button {
    cursor: pointer;
}

```

<br />

The property `cursor: pointer;` to make the arrow look like a link when hovered over .


<br />

Now we have `Button` components we can use, note that we need to give each Button 3 props. icon, goto, className. let's head into TitleSection, we need to chage that components a bit too add our little "down arrow", and modify `TitleSection.js` as follows,

<br />

```
  import React, { Component } from "react";

  import data from "../data.json";

  import "./TitleSection.css";

  import Button from "./Button";

  export default class TitleSection extends Component {

    render() {   

      return (
          <div className="title-section">

            <h1>{data.title}</h1>

            <h2>{data.subtitle}</h2>

            <Button goto="about" icon={data.icons.down} className="goto-about" />

          </div>
      );
    }
  }

```

<br />

The two changes are the `import Button from "./Button";` and the `Button` component in the page itself. note that i gave it `goto="about"` which makes it scroll down to the AboutSection on click and that `className="goto-about"` so we can modify its position in `TitleSection.css` . Modify the `grid-template-areas` and add `.title-section > .goto-about` to place the Button in the correct spot

<br />

```
.title-section {

    height: 100vh;
    background-color: rgb(248, 243, 237);

    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "h1"
    "h2"
    "goto-about";
}

.title-section > h1 {
    grid-area: h1;

    margin-top: 20vh;
}

.title-section > h2 {
    grid-area: h2;
}

.title-section > .goto-about {
    grid-area: goto-about;

    margin-bottom: 10%;
}

```

<br />

Now we have to do the exact same thing to `AboutSection` and `ProjectsSection`. start with `AboutSection` and modify `AboutSection.js`,

<br />

```
  import React, { Component } from "react";

  import data from "../data.json";

  import "./AboutSection.css";

  import Button from "./Button";


  export default class AboutSection extends Component {

    render() {   

      return (
          <div className="about-section">
            <h3>{data.sections[0].title}</h3>

            <p>{data.sections[0].items[0].content}</p>

            <Button goto="projects" icon={data.icons.down} className="goto-projects" />

          </div>
      );
    }
  }
```

<br />

And it's CSS file, 

<br />

```
.about-section {

    height: 100vh;
    background-color: rgb(188, 214, 248);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 1fr 10%;
    grid-template-areas: 
    " h3 . "
    " p p "
    " goto-projects goto-projects ";
}

.about-section > h3 {
    grid-area: h3;

    margin-top: 20%;

    font-size: x-large;
}

.about-section > p {
    grid-area: p;

    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 15%;

    text-align: left;
    font-size: larger;
}


.about-section > .goto-projects {
    grid-area: goto-projects;

    margin-bottom: 10%;
}

```

<br />


Lastly and the Button to `ProjectsSection` just note that since we want to move back to the top of the page with this button we will use the "up" arrow instead of "down" . The js file will be like,

<br />

```
  import React, { Component } from "react";

  import data from "../data.json";

  import "./ProjectsSection.css";

  import Button from "./Button";



  export default class ProjectsSection extends Component {
    render() {
      return (
        <div className="projects-section">
          <h3>{data.sections[1].title}</h3>

          <h4>{data.sections[1].subtitle}</h4>

          <div className="projects-wrapper">
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

          <Button goto="home" icon={data.icons.up} className="goto-home" />
        </div>
      );
    }
  }

```

<br />

And it's CSS file is , 

<br />

```
.projects-section {


    background-color: rgb(248, 243, 237);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 5fr 10%;
    grid-template-areas: 
    " h3 . "
    " h4 . "
    " projects projects"
    " goto-home goto-home";
}

.projects-section > h3 {
    grid-area: h3;

    text-align: left;

    font-size: x-large;

    margin-top: 15%;
    margin-left: 20%;
}

.projects-section > h4 {
    grid-area: h4;

    text-align: left;

    margin-top: 5%;
    margin-bottom: 5%;

    margin-left: 20%;

}

.projects-section > .projects-wrapper {
    grid-area: projects;

    /* this is out nested grid */
    /* with grid auto rows each project will be placed into a row */
    display: grid;
    grid-auto-rows: 150px;


    gap: 2rem;

    margin-top: 5%;
    margin-bottom: 15%;

}


.projects-section > .projects-wrapper > .project {

    border: 1px solid black;
    border-radius: 5px;

    margin-left: 5%;
    margin-right: 5%;

    padding: 1%;
}


.projects-section > .goto-home {
    grid-area: goto-home;

}

```

<br />

Note that in these long files we only added a few lines and most of them were written before in the CSS section.

<br />

Okay we are done yaaaaaaaay :)

<br />

You can see that we have a tiny arrow button at the end of each section will will scroll down to the next section when clicked. 

<br />

In the next and final section we will build and deploy this web page to github pages for everyone to see yayyy . 

<br />
