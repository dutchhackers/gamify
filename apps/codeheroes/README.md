# Codeheroes Development Setup

## Applications Overview

| App name | Stack setup                 | Status  | Description              |
| -------- | --------------------------- | ------- | ------------------------ |
| api      | NestJS + GraphQL + Sheets   | Pending | Codeheroes API (backend) |

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

Create a `.env` file in folder `libs/codeheroes/core`

Tip: copy `sample.env` (from core lib: libs/codeheroes/core) to `.env` and fill in the environment variables

```

NODE_ENV=development
PORT=5002

```

### Run Codeheroes API locally

- Run Codeheroes API

```
nx serve codeheroes-api
```

Go to http://localhost:5002/graphql to open the Apollo GraphQL sandbox

### General commands

- build application

```
nx build codeheroes-api
```

- test application

```
nx test codeheroes-api
```

- lint application

```
nx lint codeheroes-api
```
