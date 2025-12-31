# Cours Back End
Cours Back-End pour les débutants

[Ecole du Web](https://www.ecole-du-web.net/courses/cours-back-end/)


## Technologies

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node JS](https://nodejs.org/)

## Outils

- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Npm](https://www.npmjs.com/)

## Dossiers & Fichiers

- `📁 public` qui va contenir toutes les icones au format svg + styles avec le css
- `index.js`, le fichier racine de notre projet
- `.gitignore`, pour s’assurer que certains fichiers non traqués par Git restent non traqués
- `nodemon.json`, pour lancer notre serveur et être à l'écoute des changements des fichiers
- `package.json`, c'est le fichier de configuration de notre projet.

## Scripts

```json

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon index.js",
  "buildTailwind": "npx @tailwindcss/cli -i ./styles/input/tailwindInput.css -o ./public/styles/main.css --watch"
},

```

## Dependencies

```json

"dependencies": {
  "@tailwindcss/cli": "^4.1.12",
  "bcrypt": "^6.0.0",
  "cookie-parser": "^1.4.7",
  "dompurify": "^3.2.6",
  "dotenv": "^17.2.1",
  "ejs": "^3.1.10",
  "express": "^5.1.0",
  "jsdom": "^26.1.0",
  "marked": "^16.2.0",
  "mongodb": "^6.18.0",
  "mongoose": "^8.17.2",
  "quill": "^2.0.3",
  "slugify": "^1.6.6",
  "tailwindcss": "^4.1.12"
},

```

- [@tailwindcss/cli](https://www.npmjs.com/package/@tailwindcss/cli)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [dompurify](https://www.npmjs.com/package/dompurify)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [marked](https://www.npmjs.com/package/marked)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [quill](https://www.npmjs.com/package/quill)
- [slugify](https://www.npmjs.com/package/slugify)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)

## Dev Dependencies

```json

"devDependencies": {
  "nodemon": "^3.1.10"
}

```

- [Nodemon](https://www.npmjs.com/package/nodemon)

## NPM

`npm i`
