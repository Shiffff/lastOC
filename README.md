# Your Car Your Way - POC

Ce projet est un Proof of Concept (POC) pour l'application Your Car Your Way. Il s'agit d'un monorepo contenant les fonctionnalités de base pour l'inscription, la connexion, et le chat en direct entre les utilisateurs.

## Structure du projet

Le projet est organisé en deux dossiers principaux :

front/ : Contient le code source du front-end (React).
back/ : Contient le code source du back-end (Node.js).

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants :

Node.js
npm
MongoDB

## Installation

Clonez ce dépôt sur votre machine locale :

```
git clone https://github.com/Shiffff/lastOC.git
cd lastOC
```

## Configuration des variables d'environnement

Créez un fichier .env à la racine du monorepo avec les variables suivantes :

```
PORT=5000
MONGO_DB_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

## Installation des dépendances

### Back-end :

Naviguez vers le dossier backend/ :

```
cd backend
```

Installez les dépendances :

```
npm install
```

### Front-end :

Naviguez vers le dossier frontend/ :

```
cd ../frontend
```

Installez les dépendances :

```
npm install
```

### Dépendances communes :

A la racine du monorepo:

```
npm i
```

## Lancement du projet

### Back-end

Pour démarrer le serveur back-end, exécutez la commande suivante dans le dossier backend/ :

```
npm run server
```

### Front-end

Pour démarrer l'application front-end, exécutez la commande suivante dans le dossier frontend/ :

```
npm run dev
```

## Fonctionnalités

Inscription et Connexion : Permet aux utilisateurs de s'inscrire et de se connecter à l'application.
Chat en Direct : Les utilisateurs peuvent envoyer et recevoir des messages en temps réel.

Afin d'accéder a toute l'application, il vous faudra passer un utilisateur en admin:true dans votre db

## Technologies utilisées

Front-end : React, Socket.IO-client
Back-end : Node.js, Express, MongoDB, Mongoose, Socket.IO
Base de données : MongoDB
