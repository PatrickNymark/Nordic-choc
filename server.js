const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const errorHandler = require('./helpers/error-handler')
const path = require('path');

// initialize
const app = express();

// env config
require('dotenv').config();

// logger
app.use(logger('dev'));

// mongodb config
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/auth', require('./controllers/auth.controller'));
app.use('/api/pieces', require('./controllers/piece.controller'));

// global error handler
app.use(errorHandler);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,  'client', 'build', 'index.html'));
  });
}

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
