const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomPost, getRandomName, getRandomThoughts } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});
  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 10; i++) {
    const name = getRandomName();
    const last = name.split(' ')[1];

    users.push({
      username: name,
      email: `${last}${i}@gmail.com`,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
