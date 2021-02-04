# nodejs-mongoose-jwt-authentication
Sign-Up/Sign-In using Node.js, MongoDB and JWT(JSON Web Token).


**Software prerequisites:**

1. Node.js
2. Yup
3. Mongoose
4. JSON Web Token
5. Nodemailer
6. Swagger

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express
```

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express nodejs-mongoose-jwt-authentication && cd nodejs-mongoose-jwt-authentication
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:3000

## Yup

  [Yup](https://www.npmjs.com/package/yup) Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations. To get started with yup, you must first install and add it as a dependency to your project:

Installation is done using the npm install command:

```bash
$ npm install yup
```

## Mongoose
[Mongoose](https://www.npmjs.com/package/mongoose) is a MongoDB object modeling tool designed to work in an asynchronous environment.

Installation is done using the npm install command:
```bash
$ npm install mongoose
```


## JSON Web Token | JWT
   [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) is a compact claims representation
format intended for space constrained environments such as HTTP Authorization headers and URI query 
parameters.
   A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web
(between two parties).


## NodeMailer
  [Nodemailer](https://nodemailer.com) is a module for Node.js applications to allow easy as cake email sending. 
 Send mail through Gmail [click here](https://nodemailer.com/usage/using-gmail/)

## Folder Structure

```
nodejs-mysql-jwt-authentication
|
|
|____app
|    |____AuthComponent
|    |    |____auth.controller.js
|    |    |____auth.service.js
|    |    |____auth.utility.js
|    |    |____auth.validator.js
|    |
|    |____UserComponent
|         |____user.controller.js
|      	  |____user.service.js
|         |____user.utility.js
|         |____user.validator.js
|
|
|____bin
|    |____www
|
|
|____config
|    |____database.js
|    |____JWTPrivateKey.js
|    |____nodemailerDetails.js
|
|
|____models 
|    |____user.model.js
|
|
|____node_modules 
|
|
|____public
|    |____stylesheets
|    |    |__style.css
|    |
|    |____index.html
|
|
|____routes
|    |____index.js
|    |____users.js
|
|
|____app.js
|
|
|____package.json

```



