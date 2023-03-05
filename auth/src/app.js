const express = require('express');
const cookieSession = require('cookie-session')
const { sanitizeBody } = require('express-validator');
const { connectDB } = require('./config/db-connection');
const { natsWrapper } = require('./nats-wrapper')
const authenticationRoutes = require('./routes/authentication');
const { connectNATS } = require('./config/nats-connection');
const authorize = require('@careerconnect/common').authorize;

const app = express();
app.set('trust proxy', true);  //https 


app.use(express.json());
app.use(cookieSession({ signed: false, secure: true }))
app.use(sanitizeBody('*').trim().escape());

app.use(authorize); // jwt verifying middleware
// Register routes
app.use(authenticationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Invalid JSON syntax.' });
  }
  next(err);
});

app.use((err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send({ message: 'Page not found.' });
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Internal server error.' });
});


// Start server
const start = async () => {
  connectDB();
  connectNATS();
  app.listen(3000, () => {console.log('Auth service listening on port 3000...')});
};

start();
