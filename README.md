# Creating a Resume Website with React.js

Our Goal is to Create a Resume Website With Create React App.
The final version will look something like [this website](https://panahiparham.github.io/react-resume/)


## Step 1 . Setting up the project

Every Create-React-App starts with creating the project.
Head in to the folder where you want your project to live and execute the following command.

### `npx create-react-app resume`

CRA will run and generate your "resume" project.
Lets look into that folder.
<br />

The `src/` folder is where all of your source code lives<br />
The `public/` folder is where your website data will be. for example we will save the images we'll be using in this folder<br />
The `node_modules/` folder is where all of node and react packages for our website will be. for example, when we install react packages for custom effects such as auto scrolling, they will live in this folder<br />
The `package.json` is where all of our project setting will be. we'll change some stuff in there later<br />

<br />

For now Open up a terminal and run `npm start`. A development server will start up and you will see the default page for create-react-app.

<br />

### Adding HTML and data of our project

Head into `src/App.js` this is your main file.
in the file there is an *APP* function which returns some HTML.
This is the HTML that will be rendered too the page. To test it out Delete everything inside the div tag with App className and instead write "Hello React".
Save the file and you'll see that automaticlly the webpages changes and now it just shows "Hello React" string.

<br />

Let's Talk about What we are going to make in more detail now. <br />