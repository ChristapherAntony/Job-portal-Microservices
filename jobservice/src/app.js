const express = require('express');
const cookieSession = require('cookie-session')
const { connectDB } = require('./config/db-connection');
const { connectNATS } = require('./config/nats-connection');
const xss = require('xss-clean'); 
const cors=require('cors')
const authorize  = require('@careerconnect/common').authorize;
const Routes = require('./routes/routes');


const app = express();

app.use(cors());
app.set('trust proxy', true);  //https 
app.use(express.json());
app.use(cookieSession({ signed: false, secure: false }))

app.use(xss()); //  xss-clean 
app.use(authorize);

 

app.use(Routes)






// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Invalid JSON syntax.' });
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
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
  app.listen(3000, () => {
    console.log('Job service listening on port 3000... ✅');
  });
};

start();
