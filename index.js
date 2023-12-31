const express = require('express');
const sequelize = require("./config/userConfig")
const userDetails = require("./model/userModel")

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
