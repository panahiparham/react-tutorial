### Step 6 . Deploying on github

Congratulations We are done yoohooo. The only thing left to do is to deploy this page to someplace on the internet. Deployment with Create-Reace-App is covered in [this page](https://create-react-app.dev/docs/deployment/) . we will use only a small portion of the information in this page namely the part about deploying on github pages.

<br />

The first step is to upload the project onto github, make sure you've setup ssh keys for your computer and github account correctly and then Create an empty github repo lets say its url is `https://github.com/your-user-name/your-project-name` then we can push our web page onto github with these commands (executed when in the root folder of the project).

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

