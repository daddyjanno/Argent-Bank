![ArgentBank](./Front/src/assets/argentBankLogo.png)


![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)

#Objectifs:

#### Écrir des appels à l'API REST pour connecter le front au back et modéliser une API.

## Phase 1: Créer un système d'authentification

## Phase 2: Modéliser l'API pour la gestion des transactions


#### Compétences évaluées :

 -   Implémenter un gestionnaire d'état dans une application React avec Redux et Redux Toolkit et RTK Query
 -   S'authentifier à une API
 -   Interagir avec une API
 -   Modéliser une API

### Situation du projet :

Vous êtes Développeur Front-end dans une agence spécialisée dans le développement d’applications web. Votre mission est de mettre en place l'application de votre nouveau client: ARGENT BANK.
Le projet se décompose en deux phases :

-   Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
-   Phase 2 : Transactions - Spécifier les endpoints d’API nécessaires pour la gestion des transactions par client, par compte, par date...


### Phase 1 :
#### Contraintes techniques :

-   Créer l’application web (responsive) avec React, le HTML statique et le CSS est fourni pour la page d'accueil, la page de connexion et la page de profil.

-   Utiliser Redux pour gérer le state de l'application.

#### Contraintes fonctionnelles :

-   L'utilisateur peut visiter la page d'accueil
-   L'utilisateur peut se connecter au système
    -   Accéder à la page de connexion (/login)
    -   Remplir le formulaire de connexion avec ses identifiants
    -   Demander à l'application de mémoriser identifiant et mot de passe
    -   Se connecter à l’application en utilisant des jetons JWT pour l'authentification
    -   Naviguer avec succès vers la page de profil (/profile)
-   L'utilisateur ne peut pas voir les informations relatives à son profil s'il n'est pas connecté
    -   Accéder à la page de profil (/profile)
    -   Afficher le prénom sur la page de profil
    -   Afficher les informations de compte bancaire
-   L'utilisateur peut modifier le profil (nom et prénom) et conserver les données dans la base de données.
-   L'utilisateur peut se déconnecter du système
    -   Le bouton de déconnexion s'affiche une fois connecté
    -   Cliquer sur le bouton de déconnexion déconnecte l’utilisateur et celui-ci est redirigé vers la page d'accueil

### Phase 2 :
#### Contraintes techniques :
- Utilisation du format YAML et de Swagger pour visualiser les futurs endpoints de l'API pour gérer toute la partie transaction de l'application


## Installation :

### Prérequis :

-   [Git](https://git-scm.com)
-   [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Dépendances :

-   [React](https://reactjs.org): ^18.2.0
-   [React-router-dom](https://reactrouter.com/): 6.10.0
-   [React-redux](https://react-redux.js.org/): 8.1.3
-   [Redux](https://redux.js.org/): 4.2.1
-   [@reduxjs/toolkit](https://redux-toolkit.js.org/): 1.9.7


### Procédure d'installation :

Cloner le repository:

- git clone https://github.com/daddyjanno/Argent-Bank

### Installation et lancement du Back-end :

1. Aller dans le dossier "Back"

2. Vérifier la version de Node:

-   `node --version`

3. Vérifier la version de MongoDB
-   `mongo --version`
4. Installer toutes les dépendances pour le back-end:

-   `npm install` ou `yarn`


5. Lancer le back-end (port 3001 par défaut) avec Node 12:
-   `nvm use 12`

-   `npm run dev:server`

6. Créer deux utilisateurs dans la DB:
-   `npm run populate-db`


## Utilisateurs en base de données:
### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`



### Installation et lancement du Front-end :

1. Allez dans le dossier "Front-end" :

2. Installer toutes les dépendances pour Front-end :

-   `npm install`

3. Lancer le Front-end (port 3000 par défaut) :

-   `npm start`

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [React 18](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook
-   [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [Prop-types](https://www.npmjs.com/package/prop-types) - Un package utilisé pour documenter les types de propriétés prévus transmises aux composants React
-   [Redux](https://redux.js.org/) - Bibliothèque JS de gestion d'état pour applications web
-   [JSDoc](https://jsdoc.app/) - Générateur de documentation pour JavaScript
-   [GitHub](https://github.com/) - Outil de gestion de versions

## Auteur :

**Arthur Blanc** : [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

---

## EN Description:

This is a project carried out as part of the Front-End JavaScript React Developer training program at [OpenClassrooms](https://openclassrooms.com/en/paths/517-javascript-react-developer).

> Write REST API calls to connect the front-end to the back-end and model an API.
>
> #### Skills evaluated:
>
> -   Implement a state manager in a React application 🔄
> -   Interact with an API 🤝
> -   Model an API 📝
> -   Authenticate with an API 🔑

### Project (fictional) situation:

I am a Front-end Developer in an agency specialized in web application development.
The agency has a new project with a new bank that needs help setting up its application. The project is divided into two phases:

-   Phase 1: User Authentication - Creating a web application that allows clients to log in and manage their accounts and profile.
-   Phase 2: Transactions - Specifying the necessary API endpoints for a second mission.

My role during phase 1 was to develop the web application with user authentication using React and Redux. Regarding phase 2, my role was to propose a [model for designing the transaction API](/Front-end/swagger_phase_2.yaml) to be opened with Swagger.

### Phase 1: Technical Constraints:

-   Create the web application (responsive) with React.

    -   As a starting point, static HTML and CSS is provided for the homepage, login page, and profile page.

-   Use Redux to manage the application state, including the application must have:
    -   A store to manage data
    -   Actions to send information
    -   Reducers to manage changes in the application state

### Phase 1: Functional Constraints:

-   The user can visit the homepage.
-   The user can log in to the system.
    -   Access the login page (/login)
    -   Fill in the login form with their credentials
    -   Log in to the application using JWT tokens for authentication
    -   Successfully navigate to the profile page (/profile)
-   The user can only see information related to their own profile after successfully logging in.
    -   Access the profile page (/profile)
    -   See their first name on the profile page
    -   See banking account information
-   The user can edit the profile (first and last name) and retain the data in the database.
-   The user can log out of the system.
    -   See the logout button once logged in
    -   Clicking the logout button logs the user out and returns them to the homepage (/)

### Installation process:

Clone the repository :

-   `git clone https://github.com/ArthurBlanc/ArgentBank`

### Installing and launching Back-end:

1. Go in "Back-end" folder :

2. Install all dependencies for Back-end:

-   `npm install` or `yarn`

3. Launch back-end on port 3001 (default port):

-   `npm run dev` or `yarn run dev`

### Installing and launching Front-end:

1. Go in "Front-end" folder :

2. Install all dependencies for Front-end:

-   `npm install` or `yarn`

3. Launch front-end on port 3000 (default port):

-   `npm start` or `yarn start`

## Built With:

-   [Visual Studio Code](https://code.visualstudio.com/) - Text editor
-   [Sass](https://sass-lang.com/) - CSS preprocessor
-   [React 18](https://reactjs.org/) - Free and open-source JavaScript library developed by Facebook
-   [Create React App](https://create-react-app.dev/) - Toolkit created by Facebook, which is the reference for initiating a React project
-   [React Router V6](https://reactrouter.com/) - Routing library for React
-   [Prop-types](https://www.npmjs.com/package/prop-types) - A package used to document the intended types of properties passed to React components
-   [Redux](https://redux.js.org/) - JS library for state management in web applications
-   [JSDoc](https://jsdoc.app/) - Documentation generator for JavaScript
-   [GitHub](https://github.com/) - Version control tool

## Author:

**Arthur Blanc**: [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)
