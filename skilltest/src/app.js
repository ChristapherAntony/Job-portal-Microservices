import express from 'express';
import cookieSession from 'cookie-session';
import connectDB from './config/db-connection.js';
import connectNATS from './config/nats-connection.js';
import { authorize } from '@careerconnect/common';
import xss from 'xss-clean';
import cors from 'cors';

import candidateRoutes from './routes/candidate.js';
import recruiterRoutes from './routes/recruiter.js';

const app = express();

app.use(cors());
app.set('trust proxy', true);  //https 
app.use(express.json());
app.use(cookieSession({ signed: false, secure: false }))
app.use(xss());

app.use(authorize);
 
app.use(candidateRoutes);
app.use(recruiterRoutes);

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

  await connectDB();
  await connectNATS();

  app.listen(3000, () => {
    console.log('Profile service listening on port 3000...✅');
  });
};

start();
