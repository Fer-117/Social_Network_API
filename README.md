# Social Network API

![License](https://img.shields.io/badge/license-mit-GREEN.svg)

## Table of contents

- [Social Network API](#social-network-api)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [MIT License](#mit-license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Walkthrough video](#walkthrough-video)
  - [Questions](#questions)

## Description

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list

## Installation

Since this is only a back-end project at the moment what you need to do is download or clone the repository first. Then open your IDE and in the terminal run npm install to download all the necessary dependencies. You can also run 'npm run seed' which will generate random users and random thoughts thanks to the logic in the seed.js file.

## Usage

Once you have downloaded the project, installed the dependencies and run the seed generator you can run `npm start` to start the server. You can then use insomnia to make requests to the database with the help of certain routes. Here are some of the routes you will need to consult the data in the database:

User routes

- GET `http://localhost:3001/api/users` &mdash; Get all Users
- GET `http://localhost:3001/api/users/:userid` &mdash; Get a single category by id. (Replace :userid with the mongodb id of the user which you can get from the get all users route)
- POST `http://localhost:3001/api/users` &mdash; Add a new user with the body syntax: <br>`{
		"username": "New user",
		"email": "newUser1@gmail.com"
}`
- PUT `http://localhost:3001/api/users/:userid` &mdash; Update an existing user following the syntax: <br>`{
		"friends": "6469d0cbf3c322718072f09e"
}`
  In this example, we add the id of another user to the friends field of this user. It will then show up in get all users.
- DELETE `http://localhost:3001/api/users/:userid` &mdash; Replace userid number of the user you want to delete.

Thought routes

- GET `http://localhost:3001/api/thoughts` &mdash; Get all thoughts
- GET `http://localhost:3001/api/thoughts/:userid` &mdash; Get a single Thought by id. (Replace :userid with the number of the Thought)
- POST `http://localhost:3001/api/thoughts` &mdash; Add a new thought with the body syntax: <br>`{
	"thoughtText": "Newly created thought",
	"username": "example name "
}`
- PUT `http://localhost:3001/api/thoughts/:userid` &mdash; Update an existing Thought. Replace userid with the id of the Thought and follow the syntax: <br>`{
	"thoughtText": "An updated thought"
}`
- DELETE `http://localhost:3001/api/thoughts/:id` &mdash; Replace id number of the Thought you want to delete.

## MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Contributing

There are no guidelines for contributing at the moment but feel free to reach out to me with any questions or suggestions.

## Tests

There are no tests for this project at the moment.

## Walkthrough video

Click [here](https://drive.google.com/file/d/1_NL0zhlbtGdoSbwmSCsdVIBpIGDFJGeF/view) to see the video

## Questions

My [Github](https://github.com/Fer-117)

Feel free to reach out to the following email with any questions or suggestions.
fsg11497@gmail.com
