### Step 6 . Deploying on github

Congratulations We are done yoohooo. The only thing left to do is to deploy this page to someplace on the internet. Deployment with Create-Reace-App is covered in [this page](https://create-react-app.dev/docs/deployment/) . we will use only a small portion of the information in this page namely the part about deploying on github pages.

<br />

The first step is to upload the project onto github, make sure you've setup ssh keys for your computers and github account correctly and then Create an empty github repo lets say its url is `https://github.com/your-user-name/your-project-name` then we can push our web page onto github with these commands (executed when in the root folder of the project).

<br />

`git init`

`git add .`

`git commit -m "first commit"`

`git remote add origin https://github.com/your-user-name/your-project-name`

`git branch -M main`

`git push -u origin main`

<br />

If everything when fine, the code of your project should be in that github repo now :)

<br />

Now following the step by step instructions in [this page](https://create-react-app.dev/docs/deployment/) for the github pages deployment. first add a `homepage` field to `package.json`

` "homepage": "https://your-user-name.github.io/your-project-name", `

<br />

So `package.json` will look like

```
{
  "homepage": "https://your-user-name.github.io/your-project-name",
  "name": "resume-tutorial",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    .
    .
    .

```

<br />

Then we add these two lines to `package.json`

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

```

<br />

Finally we need to install a software

`yarn global add gh-pages`

We can now run `npm run deploy` and that will do everything for us.

<br />

You can now see your webpage at `https://your-user-name.github.io/your-project-name` .

<br />

yaaayyyyyyyyyyyyyy :)

<br />

we are done officially done with the project

<br />

I hope i was able to explain things clearly :) 

<br />



