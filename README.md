### Step 2 . Adding HTML and data of our project

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
