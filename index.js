const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send(process.env.GREETING || 'Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
