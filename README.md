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






Head into `src/App.js` this is your main file.
in the file there is an *APP* function which returns some HTML.
This is the HTML that will be rendered too the page. To test it out Delete everything inside the div tag with App className and instead write "Hello React".
Save the file and you'll see that automaticlly the webpages changes and now it just shows "Hello React" string.

<br />

Let's Talk about What we are going to make in more detail now. <br />
check out [this website](https://panahiparham.github.io/react-resume/) We'll be making the a simpler version of this site. <br />


Lets start by Creating a file to hold all the data of our website. this will make it easier to develop the site and will separate the actuall text data of our site from the coding part.<br/><br/>

Inside `src/` Create a json file called `data.json`. <br />

You can look into the `src/data.json` in this repository too see what i've added.
As you can see i've added stuff like title, subtitle, About Me paragraph, and two of my projects. <br/>

I've also added an icon section to `data.json` and added the actual icons in the `public/` folder at location `images/down.png` and `images/up.png` you can go into the public folder to check them out.


#### Let's Add the HTML of our page 

Head into `src/App.js` and delete that "Hello React" string from before.<br />
At this point we're going to add the HTML of the entire page without worrying about CSS or React Components or any other functionality. We will Create the CSS and abstract this HTML into React Components in the next sections

The main layout of our site will be :

```

    <div className="App">

      <div className="container">

        <div className="title-section"></div>

        <div className="about-section"></div>

        <div className="projects-section"></div>

      </div>

    </div>

```

<br/>
*note* One difference between HTML and ReactScript is that html in react files has "className" proprty instead of "class" this is because javascript reserves "class" as a keyword.

<br/>

The `<div className="container">` will be a Wrapper for the entire page and we will use it to style out page and make it fit correctly to the screen. <br />

The `<div className="title-section">` will be where we display the title and subtitle of the page. <br />

Instead of Writing the text of our website in the code directly. we've saved them into `data.json` before and now we'll import that file to be used in the `App.js` file. this is how we import it: <br />

`import data from "./data.json";`

Now we have access to the `data` variable which contains all of our data <br />

Let's Create the title-section part of the page.

```

        <div className="title-section">

          <h1>{data.title}</h1>

          <h2>{data.subtitle}</h2>

        </div>

```
<br/>

*note* In order or put javascript code in the middle of HTML tags we have to put the code around { } in this cased we used it to access the title element of out data.json file.

<br/>

Let's move on to the about-section of the page

```

        <div className="about-section">

          <h3>{data.sections[0].title}</h3>

          <p>{data.sections[0].items[0].content}</p>

        </div>

```


<br/>

And Finally the projects-section of the page

```
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

```

<br />

*note* This one might be a bit more complicated. let's break it down. First there's the `<h3>` and `<h4>` tag for the title and subtitle. Then we get a list of project objects from out `data.json` file by `data.sections[1].items` and then we use the "map" function too tell the javascript to render each of the projects. The way we render each project is creating an `<h4>` tag for its name which has an `<a>` tag that provides a link to the project and then the project description is just a `<p>` tag. The entire this is wrapped in `<div className="project">` we can later use CSS to style each project.


<br />


#### The full code 
This is the final code for this section. you can also see it in `src/App.js` of this repo.

'''

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

'''

<br />

We are now done with creating the base HTML of our website.<br />
But if you look at the page itself, its isn't very pretty, our goal for the next section is to abstract this HTML into React Components. and after that we will style our page and make it look pretty :)


<br />
