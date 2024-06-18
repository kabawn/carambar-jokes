const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const Joke = require('./models/joke');
const seedDatabase = require('./seed');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Synchronize with the database
sequelize.sync()
  .then(async () => {
    console.log('Database connected and synchronized');

    // Check if the database is empty and seed it if necessary
    const jokeCount = await Joke.count();
    if (jokeCount === 0) {
      await seedDatabase();
    }
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
