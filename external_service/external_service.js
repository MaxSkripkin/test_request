const express = require('express');
const request = require('request');
const app = express();

// Проверяем все запросы на наличие токена
app.get('/api/users', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Пробрасываем запрос в Auth сервис
  request.get('http://auth_service:3001/validate', {
    headers: {
      authorization: token
    }
  }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      // Если токен не валидный, возвращаем ошибку
      return res.status(401).send('Unauthorized');
    }
    // Пробрасываем запрос в сервис пользователей
    request.get('http://user_service:3002/api/users', {
      headers: {
        authorization: token
      }
    }, (error, response2, body) => {
      if (error) {
        return res.status(500).send('Internal server error.');
      }
      return res.send(body);
    });
  });
});

app.listen(3000, () => {
  console.log('External Service started on port 3000');
});
