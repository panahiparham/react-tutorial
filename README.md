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

*note* In order or put javascript code in the middle of HTML tags we have to put the code around { } in this cased we used it to access the title element of out data.json file.


