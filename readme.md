## Creation of a REST API for working with a collection of contacts.
### Authentication
***
* Added user authentication/authorization logic using JWT
* Created a middleware to validate the token and added it to all routes that need to be secured
* Made pagination for the collection of contacts
* Added filtering of contacts by the favorites field
* Updated user's subscription to groups: starter, pro, business
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



