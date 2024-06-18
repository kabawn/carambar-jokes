const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the joke
 *         content:
 *           type: string
 *           description: The content of the joke
 *       example:
 *         id: 1
 *         content: Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette.
 */

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 */

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Create a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: The joke was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Some server error
 */
router.post('/jokes', jokeController.addJoke);

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Returns the list of all the jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The list of the jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get('/jokes', jokeController.getAllJokes);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Get a joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke id
 *     responses:
 *       200:
 *         description: The joke description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: The joke was not found
 */
router.get('/jokes/:id', jokeController.getJokeById);

/**
 * @swagger
 * /random:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: No jokes found
 */
router.get('/random', jokeController.getRandomJoke);

module.exports = router;
