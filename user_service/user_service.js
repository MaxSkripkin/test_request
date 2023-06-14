const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  // Получаем всех пользователей
  const users = [
    { id: 1, name: 'User 1', age: 20 },
    { id: 2, name: 'User 2', age: 25 },
    { id: 3, name: 'User 3', age: 30 },
  ];
  return res.send(users);
});

app.listen(3002, () => {
  console.log('User Service started on port 3002');
});
