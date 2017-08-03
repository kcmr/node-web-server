# Node Web Server

This is a dummy website for the course [The Complete Node.js Developer Course (2nd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2/).

The site is deployed at Heroku and available at [https://mighty-reaches-34783.herokuapp.com/](https://mighty-reaches-34783.herokuapp.com/)

## For reference

### Deploying to Heroku

#### Requirements

1. A [Heroku](https://dashboard.heroku.com/) Account
2. Heroku Command Line Tools -> [Download and installation](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

#### Preparing the server for running on Heroku

```js
const port = process.env.PORT || 3000; // the second will be used for local development
...
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
```
#### Setting up Heroku globally for the first time

1. `heroku login`
2. `heroku keys:add`

#### Creating an app

1. `cd <your-app-project> && heroku create` -> this will create your app in the Heroku dashboard and add a new git remote for Heroku.

#### Deploy to Heroku

1. `git push heroku`
2. `heroku open` -> opens your Heroku app URL in your default browser


