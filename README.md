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


