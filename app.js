// code library for the server
const express = require('express');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
require('colors');

// Code library that we created
const homeRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const forbiddenRouter = require('./routes/forbidden');

// Load environment variables from .env file
dotenv.config();

// run express method and store it in app, this is our server
const app = express();
// Set the port to the environment variable PORT that we keep in .env file
const port = process.env.PORT;

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Set view engine and views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use session middleware with environment variable as secret
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

// Checks what was requested and sends it to the right router
app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forbidden', forbiddenRouter);

// Handle 404 errors
app.use((req, res) => {
  res.status(404);
  res.render('error', { title: 'Error', status: 404, msg: 'Síða fannst ekki!' });
});

// Start the server and listen on port
app.listen(port, () => {
  console.log(`Server is running of port ${port}`.green.bold);
  console.log('Remember to turn off server with ctrl + c'.yellow.bold.underline);
});
