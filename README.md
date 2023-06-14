# Тестовое задание Node.js Backend Developer

Реализовать проброс запроса с внешнего сервиса во внутренний Auth сервис до сервиса с пользователями.

Не пропускать запрос без токена.

Условия: сервисы должны быть standalone, не зависимы друг от друга, развернуты в докере тремя контейнерами

## Запуск
1. Склонируйте проект себе на компьютер
2. В терминале перейдите в директорию с файлом docker-compose.yml
3. Запустите проект командой docker-compose up

## Проверка работы
1. Откройте Postman и перейдите во вкладу Headers
2. В поле KEY впишите "Authorization" , а в поле VALUE впишите правильный JWT токен в формате "Bearer <ваш токен>". Пример: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
3. Далее нужно отправить GET запрос на адрес http://localhost:3000/api/users
3. Если токен валиден, то вернётся список пользователей , если токен неправильный , то вернётся ошибка 'Unauthorized'.

## Cтэк

- Express
- Javascript
