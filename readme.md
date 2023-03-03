## Загрузка файлів на сервер.
### Аватарка користувача
***
* Аватарка оброблена пакетом jimp і задані для неї розміри 250 на 250
***
### Команди для запуску проекта:
- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
***
### Possible endpoints:
* `POST /users/signup` — Registration
* `POST /users/login` — Login
* `GET /users/logout` — Logout
* `GET /users/current` — Current user
* `GET /contacts?page=1&limit=20` — Pagination for a collection of contacts (page, limit)
* `GET /contacts?favorite=false` — Filter contacts by favorites field (true, false)
* `PATCH /users` — Subscription renewal ('starter', 'pro', 'business')                               |
* `PATCH /users/avatars` — Avatar change (250x250)

 


