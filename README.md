Setup

Atom React Packages
$ apm install react@0.16.2 / apm install react to use the lastest

Initialize npm , this will creates package.json file
$ npm init

Create file .gitignore , this will not save the folders files listed in .gitignore
  .DS_STORE
  node_modules
  build

React and ReactDOM : connect app to use react
$ npm install react@15.5.4 react-dom@15.5.4 --save  

Webpack : set module bundler
$ npm install webpack@3.4.0 --save-dev
$ npm install webpack@3.4.0 -g

Create file webpack.config.js and setup configuration found in respository.

Webpack: transform code in src/index.jsx, and output its bundle into a build/app.bundle.js
$ webpack

Babel: transpile our JSX into ES5 the browser understands
$ npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev

Declaring Prop Types:
$ npm install prop-types@15.5.10 --save
  import PropTypes from "prop-types";

Webpack Development Server
$ npm install webpack-dev-server@2.5.0 -g
$ npm install webpack-dev-server@2.5.0 --save-dev
We can now bundle and serve projects with the following two commands:
$ webpack
$ webpack-dev-server

Hot Module Replacement: refresh without running webpack to bundle
$ npm install react-hot-loader@3.0.0-beta.7 --save-dev
  update webpack.config.js add entry and output

Programmatically generate an index.html file using Webpack
$ npm install html-webpack-plugin@2.29.0 --save-dev
  update webpack.config.jsadd plugin

Create template.ejs :template tells the plugin which file to use as a template when creating an index.html in the build directory.

npm Scripts : update package.json for testing


Linting with ESLint : creates the .eslintrc.json file
$ npm install eslint@4.13.1 -g
$ npm install eslint@4.13.1 --save-dev
$ eslint --init

? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? No
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Spaces  
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? Yes
? What format do you want your config file to be in? JSON

$ eslint src/** src/**/**  to run Linter
$ eslint src/** src/**/** --fix to fix issues

ESLint Loader: to automatically run when bundle
$ npm install eslint-loader --save-dev

Configuring CSS Modules:
$ npm install --save styled-jsx

Implementing React-Router:
$ npm install react-router-dom@4.0.0 --save
import { HashRouter } from 'react-router-dom';

Defining Routes
import { Switch, Route } from 'react-router-dom';
 ex: localhost:8080/#/newcard
  Anything included after a # symbol is not sent to the server. This means the server only "sees" localhost:8080/, and sends our big bundle.js file.

Linking Between Routes
import { Link } from 'react-router-dom';
