const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // eslint-disable-line no-console
});
