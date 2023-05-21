const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomPost } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});
  const users = [];
  const thoughts = [];

  // create 10 users
  for (let i = 0; i < 10; i++) {
    users.push({
      username: `User ${i}`,
      email: `user${i}@gmail.com`,
    });
  }

  // create some random thoughts
  for (let i = 0; i < 10; i++) {
    thoughts.push({
      thoughtText: getRandomPost(25),
      username: `User ${i}`,
    });
  }

  await User.collection.insertMany(users);
  await Thought.insertMany()(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
