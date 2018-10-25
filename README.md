# Fashion-Style App

User can select gender and body type or shape characteristics to retrieve data regarding unique styles.

The user can retrieve data to help choose what is best to wear or avoid based on input of their body style characteristics for each style (business, athletic, casual, etc.)

User can also go to a tips page for quick reference.

User can select on clothing items returned and find them online (retailers etc.)

User can request match suggestions for clothing items (what would be stylish with this coral buttoned up?)

Polished and popping UI styling and format. It is about fashion and style.

# Expectations:
- We expect whatever you build to have utility
- We expect you to have market or real-world research that evidences your idea has REAL value to people. 
- We expect you to have done research on other web / mobile applications in your domain. 
- We expect you to put serious time and thought into this. 
- We expect you to report problems you are facing along the way.
- We expect you to utilize some form of project management system.
- We expect you to dig deep into documentation and external resources to learn what you need.```

# Requirements:
- Must use React, Vue, or Angular in some way (even if minimal)
- Must use a Node and Express Web Server
- Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
- Must have both GET and POST routes for retrieving and adding new data
- Must be deployed using Heroku (with Data)
- Must utilize at least two libraries, packages, or technologies that we haven't discussed
- Must allow for or involve the authentication of users in some way
- Must have a polished frontend / UI
- Must have folder structure that meets MVC Paradigm
- Must meet good quality coding standards (indentation, scoping, naming)
- Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md```

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
