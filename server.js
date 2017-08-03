const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

let maintenance = false;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// register middleware
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: Method: ${req.method} Path: ${req.url}`;
  fs.appendFile('server.log', log + '\n', err => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

if (maintenance) {
  app.use((req, res, next) => {
    res.render('maintenance.hbs');
  });
}

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home page',
    welcomeMessage: 'Welcome to some website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    title: 'Projects'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad request'
  });
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
