# React Template

**react-template** is a template of a site developed with _React_, _Typescript_, _Express_, _TypeORM_ and _NodeJs_.

## Create frontend project

Run the following command to create a new project ([see the documentation](https://create-react-app.dev/docs/adding-typescript/)):

```sh
npx create-react-app dtadmin --template typescript  
mkdir frontend
```

Move React files to the `frontend` folder. Update `.gitignore` file to exclude:
```sh
/frontend/node_modules  
/frontend/build  
/backend/node_modules  
/backend/build  
deploy.sh  
.env  
```

## Create Node (Express) backend project

To create our Node project, run the following command:

```sh
mkdir backend
cd backend
npm init -y
mkdir server
```

## Packages for the frontend project

The following npm packages shall be installed:

```sh
cd frontend
npm i redux react-redux react-router-dom  
npm i @reduxjs/toolkit  
npm i --save-dev @redux-devtools/extension  
npm i @types/css-modules  
npm i @hookform/resolvers @hookform/error-message  
npm i yup  
npm i bootstrap  
npm i moment  
npm i --save-dev @types/bootstrap  
npm i --save-dev sass  
```

## Project configuration

After installing npm packages, open package.json file, and add a line:

```sh
"proxy": "http://localhost:4000"
```

if you want to change the port number of your local development server. Check if the port is not in use:

```sh
sudo ss -tulwn | grep LISTEN
```

## Packages for the backend project

The following npm packages shall be installed:

```sh
cd backend
npm i express body-parser compression cookie-parser cors helmet express-validator  
npm i jsonwebtoken  
npm i --save-dev @types/jsonwebtoken  
npm i @types/express   
npm i @types/node  
npm i @types/body-parser  
npm i concurrently cross-env nodemon  
npm i dotenv  
npm i ts-node  
npm i typeorm  
npm i reflect-metadata  
npm i mysql  
npm i bcrypt  
npm i @types/bcrypt  
npm i moment  
```

## NPM scripts
Get a list of globally installed packages:

```sh
npm list -g --depth 0
```

Get a list of user-installed packages:

```sh
npm list --depth 0
```

Check for outdated packages:

```sh
npm outdated
```

Use `npm update` to freshen already installed packages. 
You can ask for the latest version with the `@latest` tag.
For example:

```sh
npm install lodash@latest
```

To update `package.json` version numbers, append the `--save` flag:

```sh
npm update --save
```

### SSL Certificate
To add a SSL certificate to a new website, read the article [How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04).

If a new domain name shall be added to already existing certificate, use the `--expand` option of the `certbot`:

```sh
certbot --expand -d existing.com,newdomain.com
```

## Resources

### General web development
1. [Web app manifest](https://web.dev/add-manifest/)
1. [React project structure](https://www.xenonstack.com/insights/reactjs-project-structure)
1. [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### TypeScript
1. [TypeScript](https://www.typescriptlang.org/)

### React
1. [React](https://reactjs.org/)
1. [React Router](https://reactrouter.com/en/main)
1. [Redux](https://redux.js.org/)
1. [Redux Toolkit](https://redux-toolkit.js.org/)

### Bootstrap, CSS, and Sass
1. [Add Sass to your React App](https://medium.com/nerd-for-tech/add-sass-to-your-react-app-in-2021-here-is-how-c7260c323a5a)
1. [Customize Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
1. [CSS Modules](https://github.com/css-modules/css-modules)

### Express
1. [Express](https://expressjs.com/)
1. [How to Build a Simple React app With Express API](https://blog.alexdevero.com/build-react-app-express-api/)
1. [Express middleware](https://expressjs.com/en/resources/middleware.html)
1. [express-validator](https://express-validator.github.io/docs/)
1. [How I structure my Express + Typescript + React applications](https://dev.to/dirk94/how-i-structure-my-express-typescript-react-applications-g3e)

### Nodejs
1. [Nodejs](https://nodejs.org/en/)
1. [How to Create a React App with a Node Backend](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)
1. [How To Set Up a Node.js Application for Production on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)
1. [PM2](https://pm2.keymetrics.io/)

### SSL
1. [Certbot](https://eff-certbot.readthedocs.io/en/stable/)
1. [How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

### Electron
1. [Electron Apps Made Easy with Create React App and Electron Forge](https://dev.to/mandiwise/electron-apps-made-easy-with-create-react-app-and-electron-forge-560e)
1. [DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated](https://github.com/facebook/create-react-app/issues/12035)