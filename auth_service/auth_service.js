const express = require('express');
const app = express();
const jwtRegex = /^Bearer\s[^\s]+\.[^\s]+\.?[^\s]*$/;

app.get('/validate', (req, res) => {
  // Проверка формата токена
  const token = req.headers.authorization;
  if (token && jwtRegex.test(token)) {
    return res.sendStatus(200);
  } else {
    return res.sendStatus(401);
  }
});

app.listen(3001, () => {
  console.log('Auth Service started on port 3001');
});
