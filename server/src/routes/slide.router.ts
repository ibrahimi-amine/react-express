import express from 'express';

const slideRouteur = express.Router();

// With middlewares you can ensure the user is authenticated
// before requesting secured API routes
slideRouteur.use((request, response, next) => {
  process.stdout.write('HelloRouter Middleware\n');
  if (request.ip.endsWith('127.0.0.1')) {
    process.stdout.write('Request from local IP\n');
    next();
  } else {
    next();
  }
});

slideRouteur.get('/*', (request, response) => {
  response.send('Hello TIW8 !');
});

export {
  slideRouteur as SlideRouteur
};