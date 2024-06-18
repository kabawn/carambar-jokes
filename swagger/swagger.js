const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar Jokes API',
      version: '1.0.0',
      description: 'API for managing Carambar jokes',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Change this to your production URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
