const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.use(bodyParser.json());

// Synchronize with the database
sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Use the routes
app.use('/api', jokeRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
