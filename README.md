# Digital Business Card

Тестовое приложение — цифровая визитка разработчика с GraphQL API.

Приложение предоставляет информацию о профиле, профессиональных навыках, опыте работы и проектах через GraphQL API и Apollo Sandbox.

## Технологии

- NestJS
- TypeScript
- GraphQL
- Apollo Server
- Prisma ORM
- PostgreSQL
- Docker

## Возможности

GraphQL API позволяет получить:

- информацию о профиле;
- список профессиональных навыков;
- опыт работы;
- список проектов и ссылки на репозитории.

## Запуск

### 1. Запустить PostgreSQL

    docker compose up -d

### 2. Установить зависимости

    npm install

### 3. Применить миграции

    npx prisma migrate dev

### 4. Заполнить базу тестовыми данными

    npm run db:seed

### 5. Запустить приложение

    npm run start:dev

После запуска GraphQL API доступен через Apollo Sandbox.

## Пример GraphQL-запроса

    query {
      profile {
        name
        description
        githubUrl
        linkedinUrl

        skills {
          title
        }

        experiences {
          company
          position
          period
          achievements
        }

        projects {
          name
          url
        }
      }
    }

## Автор

**Вадим Жарков**

- GitHub: https://github.com/vajarkov
- LinkedIn: https://www.linkedin.com/in/%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC-%D0%B6%D0%B0%D1%80%D0%BA%D0%BE%D0%B2-b89a0a34/
