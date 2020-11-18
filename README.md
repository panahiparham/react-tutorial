### Step 4 . Adding CSS

Let's start by added some nice font to our page [Google Fonts](https://fonts.google.com/) is a good place to start. Select a font you like and copy its link in the popup section that opens up.

<br />

for example this is the link for the Open Sans font `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">` . We can add this HTML tag to `public/index.html` to include it in our website. Then in order to select this font head into `src/App.css` and add the following CSS property to the `.App` selector.

<br />

```
.App {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

```

<br />

that `text-align: center;` was in our project by default, let is stay there to make everything nice and centered.

<br />


Great, now our text is a bit better to look at :)

#### Adding styling to TitleSection of the page 


We will be using CSS grid to put elements on the page in the correct place. I will give a quick introduction too CSS grid and for more info check out [this site](https://css-tricks.com/snippets/css/complete-guide-grid/) .

<br />

Let's say we have these elements in our HTML

<br />

```
    <div className="wrapper">

      <div className="header">HEADER</div>

      <div className="main">MAIN</div>

      <div classname="aside">ASIDE</div>
    </div>

```

<br />

And we want to place the elements of the page in the following way,

```
**************************  
*         HEADER         *
************************** 
*          *             *
* ASIDE    *    MAIN     *
*          *             *
*          *             *
*          *             *
*          *             *
**************************  

```

<br />

To arrange the elements in this way add the CSS property `display: grid;` to the parent element, in this case `wrapper div`. the we add `grid-template-columns: 1fr 2fr;` to split the page vertically into ratios of 1 and 2 and also `grid-template-rows: 200px 1fr;` to split the page horizontally into a top section of 200 pixels and a bottom section of whatever amout is left.


<br />

Next we need to "block out" the page with our elements according to the templates we created, this is how we do it,

<br />

```
.wrapper{

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 200px 1fr;


  /* we block out the page */

  grid-template-areas:
    "head head"
    "aside main";
  
}

/* to tell CSS what we mean by head, aside, main we need to assign grid-area to our divs */

.header {
  grid-area: head;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}


```

<br />

That was a quick introduction to CSS grid, now that we know how it works, let's use it to create the layout of our page

<br />

Since We've abstracted everything into Components, we can add styling to each component one by one. Let's start with TitleSection, Head into `src/TitleSection.js` and add this import line,

<br />

`import "./TitleSection.css";` 

<br />

Of course we now need to create the `TitleSection.css` inside `src/` folder, let's do that now. Create `src/TitleSection.css` and open it up.


<br />

We want the following layout for the TitleSectiob

```
**************************  
*                        *
*                        * 
*          H1            *
*                        *
**************************
*          H2            *
*                        *
*                        *
*                        *
**************************  

```

<br />

Add these lines into `TitleSection.css`

```
.title-section {

    height: 100vh;
    background-color: rgb(248, 243, 237);

    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "h1"
    "h2";
}

.title-section > h1 {
    grid-area: h1;

    margin-top: 20vh;
}

.title-section > h2 {
    grid-area: h2;
}

```

<br />

Other than CSS grid stuff, i've just added a height for the page and a margin to H1 to make them render in the place that i like and added some color. Now the TitleSection should take one full window height and H1, H2 tags should be a bit apart from each other. Moving onto About Section

<br />

Create the corresponding `AboutSection.css` and import it into `AboutSection.js`. We want this layout,

<br />

We want the following layout for the TitleSectiob

```
**************************  
*           *            *
*           *            * 
*     H3    *            *
*           *            *
************************** 
*                        *
*     P                  *
*                        *
*                        *
**************************  

```

<br />

Our CSS will be something like,

<br />

```
.about-section {

    height: 100vh;
    background-color: rgb(188, 214, 248);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 1fr;
    grid-template-areas: 
    " h3 . "
    " p p ";
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
```

<br />

Finally for the Projects Section we want,

<br />

```
**************************  
*    H3     *            *
**************************
*    H4     *            * 
**************************
*                        *
*        Project         *
*                        *
*        Project         *
*                        *
*        Project         *
*                        *
*          ...           *
**************************  

```

<br />

Now this one is a bit more complicated, since we want to support any number of Projects. so we make the bottom section of the page another grid (yes you can put grids inside other grids) and create a variable rows template for the inner grid. Here is the code to do it,

<br />


First i wrap each project in ProjectsSection in another div with class "projects-wrapper", now our `ProjectsSection.js` will look like this,

<br />

```
  import React, { Component } from "react";

  import data from "../data.json";

  import "./ProjectsSection.css";

  export default class ProjectsSection extends Component {
    render() {
      return (
        <div className="projects-section">
          <h3>{data.sections[1].title}</h3>

          <h4>{data.sections[1].subtitle}</h4>


          {/* This is the new div */}
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
        </div>
      );
    }
  }

```

<br />

Now i can create the `ProjectsSection.css` as follows,

<br />



```
.projects-section {

    background-color: rgb(248, 243, 237);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 5fr;
    grid-template-areas: 
    " h3 . "
    " h4 . "
    " projects projects";
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

```

<br />

If the nested grid feels weird you can open the developer tools in the browser and check out the borderline of the grids by inspecting divs that have `display: grid;` .

<br />

We are almost done with the CSS of this page, but i want to add one more thing. I want the layout of the entire page to change if the window rendering the webpage is less than 900 pixels wide. So our page will look different on Mobile Phones than on Desktops. This feature is called "Responsive" ness of the web page.

<br />

This is why we created a "container" component for the page, let's go into the `Container.js`. Let's wrap the container div with `<div className="screen-wrapper">` and create and import `Container.css`. The Container component now looks like,

<br />

```
import React, { Component } from "react";

import "./Container.css"

export default class Container extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="screen-wrapper">

        <div className="container">
          {children}
        </div>

      </div>
    );
  }
}


```

<br />

Let's head into `Container.css`, We want 2 different layouts for the screen:

* window less than 900 pixel wide

<br />

```
**************************  
*                        *
*                        *
*                        *
*                        *
*       container        *
*                        *
*                        *
*                        *
*                        *
**************************  

```

<br />

* window greater than 900 pixel wide

<br />

```
***************************  
*   *                 *   *
*   *                 *   *
*   *                 *   *
*   *                 *   *
*   *    container    *   *
*   *                 *   *
*   *                 *   *
*   *                 *   *
*   *                 *   *
***************************  

```

<br />

Basically i want borders to the left and right of the container. Add these lines to  `Container.css` .

<br />

```
.screen-wrapper {

    background-color: rgb(89, 187, 252);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    " container ";
}

/* this part of the code runs only if window is more than 900 pixel wide  */
@media (min-width: 900px) {
    .screen-wrapper {
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-areas:
        " . container . ";
  
    }
  }


.screen-wrapper > .container {
    grid-area: container;
}

```

<br />

And with that we are done with the CSS section of our page. that took a long time :)

<br />

In the next section we will add buttons to each part of the page to scroll to the next section when clicked .

<br />










