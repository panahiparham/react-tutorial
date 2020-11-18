### Step 3 . Adding Components

What is a React Component, It is basically any part of your webpage. A section of the page, a table, navigation bar, ... technically speaking a component is a bunch of HTML, CSS and Javascript all wrapped into a reusable element that you can use to create your web pages.

<br />

#### Let's Create a Component

In order to keep the files clean, let's create a new folder `components/` inside the `src/` folder and inside of that a file called `Hello.js` this will be just a dummy component to learn the basics of creating and using a Component.

<br />

Write this code inside `Hello.js`,

```
  import React, { Component } from "react";

  export default class Hello extends Component {
      
    render() {      
      return (
        <div>
            Hello
        </div>
      );
    }
  }

```

<br />

As you can see we have included React and Component from the `"react"` file and created a class that inherits from Component then we've overridden the `render()` method of this class to return a `<div>` tag and then we've exported this class by `export default`.

<br />

Our new component is done and ready to be used. Head into `App.js` . The first step is to import the `Hello` Component, to do this add this line of code<br />

`import Hello from "./components/Hello";`<br />

to the top of the `App.js` file. Now we can "add" this component to the page like any other HTML tag `<Hello />`. Add the Hello component inside the title section of the page. <br />

```
        <div className="title-section">

          <Hello />

          <h1>{data.title}</h1>

          <h2>{data.subtitle}</h2>

        </div>
```

<br />

If you take a look at the webpage you'll see that the "Hello React" is added to the page. 

<br />

One important note is that components are reusable. try this,

```
        <div className="title-section">

          <Hello />
          <Hello />
          <Hello />

          <h1>{data.title}</h1>

          <h2>{data.subtitle}</h2>

        </div>
```

And you'll see that "Hello React" shows up 3 times. now remove the extra 2 and lets keep going. 
 
<br />

I want to customize the Hello component to that it say "Hello Parham" or whatever other name it is given. We can do this by using "props". To start Add a property to the Hello tag called name and give it a value.

<br />

`<Hello name="Parham"/>`

<br />

Now we have to grab this "name" property within our component and use it. Head into Hello.js and add this line inside the `render` method of `Hello` class <br />

`const {name} = this.props`

<br />

Which means, go to the "props" object of this class and give me the property who's called "name". Now we have access to the `name` variable and can freely use it inside our render method, change the contents of the div tag to display "Hello whatever_our_name_is", the code for Hello.js should be looking like this,<br />

```

  import React, { Component } from "react";

  export default class Hello extends Component {


      
    render() {   
        
      const {name} = this.props

      return (
        <div>
            Hello {name}
        </div>
      );
    }
  }

```

<br />

We now know how to create components. yaaayy :)   (btw you can now delete that `Hello` component from App.js)

<br />

Lets turn out page into several components. First Create a new component called `TitleSection` inside the `components/` folder and copy all the HTML of this part of page from `App.js` inside it.

<br />

*Note* since each component uses `data.json` we have to import it into each of our components with this line 
`import data from "../data.json";`

<br />

```
  import React, { Component } from "react";

  import data from "../data.json";

  export default class TitleSection extends Component {

    render() {   

      return (
          <div className="title-section">

            <h1>{data.title}</h1>

            <h2>{data.subtitle}</h2>
          </div>
      );
    }
  }

```

<br />

Now do the same for the about section and projects section of the page

<br />


```
  import React, { Component } from "react";

  import data from "../data.json";

  export default class AboutSection extends Component {

    render() {   

      return (
          <div className="about-section">
            <h3>{data.sections[0].title}</h3>

            <p>{data.sections[0].items[0].content}</p>
          </div>
      );
    }
  }
```

<br />


```

  import React, { Component } from "react";

  import data from "../data.json";

  export default class ProjectsSection extends Component {

    render() {   

      return (
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
      );
    }
  }

```

<br />

Okay the boring copy/paste part is over. Head into App.js, import the 3 components we just made and replace the HTML of each section with its component. This is our new `App.js` file

<br />

```

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

```

<br />
Instead of all that HTML we now have only 3 elements in our container to represent the 3 parts of the page. If you look at the webpage everything should still be like it was before, but the code is much cleaner now and is easier to change and more resuable. :)
<br />

The last thing we'll do in the section is to create a component for the container div this way we can style the container in its own component and separate from the other CSS files. To do this create a component and call it `Container` and add these lines to it,

<br />

```
  import React, { Component } from "react";


  export default class Container extends Component {
      
    render() {
        const { children } = this.props
        
      return (
        <div className="container">
            {children}
        </div>
      );
    }
  }

```

<br />

Here we used a prop called "children" which contains every HTML tag inside this component. since we want to replace the container div with this component, children will contain all of the HTML of our TitleSection, AboutSection and ProjectsSection. We then put all of that HTML into the div tag of this component with,


```
        <div className="container">
            {children}
        </div>

```

<br />

Now inside `App.js` import the Containder and replace the container div with our new component.

<br />

```
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

```

<br />

Our Page should hopefully look the same as when we started this section. but now all the code is separated and reusable and easy to change :)


<br />

In the next section we'll be adding CSS to each of our components and make our webpage pretty.   :)

<br />



