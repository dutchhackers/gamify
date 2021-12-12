# Foosball Development Setup

## Applications Overview

| App name | Stack setup                 | Status         | Description            |
| -------- | --------------------------- | -------------- | ---------------------- |
| api      | NestJS + GraphQL + Prisma 2 | In Development | Foosball API (backend) |
| slackbot | NestJS                      | Not Started    | Foosball Slackbot      |

## Development setup

If you wish to develop or contribute to this repo, we suggest the following:

- Clone this repository

```
git clone https://github.com/move4mobile/coders-workspace
cd coders-workspace
```

- Install this project's dependencies on your computer

```
npm install
```

Advised to use Node version 14 (or higher).

Tip: if you have nvm installed, you can run `nvm use` to auto-detect the preferred Node version

- Create .env file

Copy `sample.env` (in the API app root) to `.env` and fill in the environment variables

```
DATABASE_URL="file:./dev.db"

NODE_ENV=development
PORT=3000
```

### Configure Prisma

- Generate Prisma database

```
npx prisma db push
```

- Seed database

```
npx prisma db seed
```

- Run Prisma Studio

You can verify database + seed data setup running:

```
npx prisma db seed
```

Prisma Studio will automatically open a browser at http://localhost:5555/

### Run Foosball API locally

- Run application locally on your computer

### General commands

- build application
