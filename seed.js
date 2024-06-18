const sequelize = require('./config/database');
const Joke = require('./models/joke');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const jokes = [
    { content: "Quelle est la femelle du hamster ? L’Amsterdam" },
    { content: "Que dit un oignon quand il se cogne ? Aïe" },
    { content: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette." },
    { content: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit" },
    { content: "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
    { content: "Que se fait un Schtroumpf quand il tombe ? Un Bleu" },
    { content: "Quel est le comble pour un marin ? Avoir le nez qui coule" },
    { content: "Qu'est ce que les enfants usent le plus à l'école ? Le professeur" },
    { content: "Quel est le sport le plus silencieux ? Le para-chuuuut" },
    { content: "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule" },
  ];

  await Joke.bulkCreate(jokes);
  console.log('Database seeded!');
};

seedDatabase()
  .catch(err => {
    console.error('Failed to seed database:', err);
  });
