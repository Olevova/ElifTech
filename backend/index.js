const express = require('express');
const cors = require('cors');
const logger = require('morgan')
const db = require('./db');
const app = express('');
const restRoute = require('./route/route')
// const { runMigrations } = require('node-pg-migrate');
const dbConfig = require('./db');

// runMigrations({
//   databaseUrl: dbConfig.connectionString,
//   dir: './migrations/1685799212434_my-first-migration.js',
//   direction: 'up',
//   count: Infinity, // Це виконає всі міграції
// }).then(() => {
//   console.log("міграції пройшли успішно");
// }).catch((error) => {
//   console.log(error);
// });


app.use(express.json());
app.use(cors());
app.use(logger('tiny'));

app.use('/', restRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`its Start on ${PORT}`);
});


