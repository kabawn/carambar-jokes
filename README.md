# API de Blagues Carambar

## Description
L'API de Blagues Carambar est un service web qui vous permet de gérer une collection de blagues. L'API prend en charge les opérations pour ajouter, consulter et récupérer une blague aléatoire. Ce projet est construit avec Node.js, Express, Sequelize et SQLite.

## Endpoints

### Ajouter une Blague
- **URL** : `/api/jokes`
- **Méthode** : `POST`
- **Corps de la requête** :
  ```json
  {
    "content": "Votre blague ici"
  }
  ```
- **Réponse** :
  ```json
  {
    "id": 1,
    "content": "Votre blague ici",
    "createdAt": "2024-06-18T07:45:12.154Z",
    "updatedAt": "2024-06-18T07:45:12.154Z"
  }
  ```

### Consulter Toutes les Blagues
- **URL** : `/api/jokes`
- **Méthode** : `GET`
- **Réponse** :
  ```json
  [
    {
      "id": 1,
      "content": "Votre blague ici",
      "createdAt": "2024-06-18T07:45:12.154Z",
      "updatedAt": "2024-06-18T07:45:12.154Z"
    },
    ...
  ]
  ```

### Consulter une Blague par ID
- **URL** : `/api/jokes/:id`
- **Méthode** : `GET`
- **Réponse** :
  ```json
  {
    "id": 1,
    "content": "Votre blague ici",
    "createdAt": "2024-06-18T07:45:12.154Z",
    "updatedAt": "2024-06-18T07:45:12.154Z"
  }
  ```

### Consulter une Blague Aléatoire
- **URL** : `/api/random`
- **Méthode** : `GET`
- **Réponse** :
  ```json
  {
    "id": 2,
    "content": "Blague aléatoire ici",
    "createdAt": "2024-06-18T07:47:09.774Z",
    "updatedAt": "2024-06-18T07:47:09.774Z"
  }
  ```

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/kabawn/carambar-jokes.git
   ```

2. Installez les dépendances :
   ```bash
   cd carambar-jokes
   npm install
   ```

3. Démarrez le serveur :
   ```bash
   npm run dev
   ```

## Déploiement

### API
L'API est déployée sur Render. Vous pouvez y accéder à : [https://carambar-jokes-79ge.onrender.com](https://carambar-jokes-79ge.onrender.com)

### Frontend
Le frontend est déployé sur GitHub Pages. Vous pouvez y accéder à : [https://kabawn.github.io/carambar-jokes](https://kabawn.github.io/carambar-jokes)

## Utilisation

### Ajouter des Blagues

Utilisez l'endpoint `POST /api/jokes` pour ajouter des blagues. Par exemple :

```bash
curl -X POST https://carambar-jokes-79ge.onrender.com/api/jokes \
-H "Content-Type: application/json" \
-d '{"content": "Pourquoi les scientifiques ne font-ils pas confiance aux atomes ? Parce qu'ils constituent tout !"}'
```

### Consulter Toutes les Blagues

Utilisez l'endpoint `GET /api/jokes` pour consulter toutes les blagues :

```bash
curl https://carambar-jokes-79ge.onrender.com/api/jokes
```

### Consulter une Blague par ID

Utilisez l'endpoint `GET /api/jokes/:id` pour consulter une blague par son ID :

```bash
curl https://carambar-jokes-79ge.onrender.com/api/jokes/1
```

### Consulter une Blague Aléatoire

Utilisez l'endpoint `GET /api/random` pour consulter une blague aléatoire :

```bash
curl https://carambar-jokes-79ge.onrender.com/api/random
```

## Documentation Swagger

La documentation complète de l'API est disponible à `/api-docs`. Vous pouvez y accéder dans votre environnement déployé à : [https://carambar-jokes-79ge.onrender.com/api-docs](https://carambar-jokes-79ge.onrender.com/api-docs)

## Licence

Ce projet est licencié sous la licence MIT.
```

### Instructions pour Mettre à Jour le README sur GitHub

1. **Copiez le contenu** du texte `README.md` ci-dessus.
2. **Allez sur votre dépôt GitHub** : [https://github.com/kabawn/carambar-jokes](https://github.com/kabawn/carambar-jokes)
3. **Cliquez sur le fichier `README.md`** dans votre dépôt.
4. **Cliquez sur l'icône du crayon** (✏️) pour éditer le fichier.
5. **Collez le nouveau contenu du README** et enregistrez les modifications en faisant défiler vers le bas et en cliquant sur "Commit changes".

