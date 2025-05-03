const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('QS Data Website under development');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
