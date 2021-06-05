const express = require('express');
const router = express.Router();
const { Client } = require('pg')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const client = new Client({database: 'postgres', password: 'qwe123', host: 'localhost', port: '5432', user: 'postgres'})
  await client.connect()
//   const response = await client.query('SELECT * from try')
//   console.log(response.rows[0].id) // Hello world!
//   await client.end()
  res.send('respond with a resource');
});

module.exports = router;
