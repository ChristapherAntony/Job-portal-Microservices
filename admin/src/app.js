const express = require('express');
const cookieSession = require('cookie-session')
const { connectDB } = require('./config/db-connection');
const { connectNATS } = require('./config/nats-connection');
const xss = require('xss-clean');
const cors = require('cors')
const adminRoutes = require('./routes/admin-routes');
const authorize = require('@careerconnect/common').authorize;


const app = express();
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);
app.use(cookieSession({ signed: false, secure: true }))

app.use(xss()); //  xss-clean 
app.use(authorize); // jwt verifying middleware

app.use(adminRoutes) 

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
  res.status(500).send({ message: 'Internal server error.' });
});


// Start server
const start = async () => {
  connectDB();
  connectNATS();
  app.listen(3000, () => {
    console.log('Profile service listening on port 3000...✅');
  });
};
start();
