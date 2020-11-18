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




