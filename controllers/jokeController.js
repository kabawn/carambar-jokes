const Joke = require('../models/joke');
const { Sequelize } = require('sequelize');

// Ajouter une blague
exports.addJoke = async (req, res) => {
  try {
    const joke = await Joke.create({ content: req.body.content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter une blague par ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });

    if (!joke) {
      console.log("No jokes found in the database.");
      return res.status(404).json({ message: 'No jokes found' });
    }

    res.status(200).json(joke);
  } catch (error) {
    console.error('Error fetching random joke:', error);
    res.status(500).json({ error: error.message });
  }
};
