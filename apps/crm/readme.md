# CRM Development Setup

## Applications Overview

| App name | Stack setup                 | Status         | Description       |
| -------- | --------------------------- | -------------- | ----------------- |
| api      | NestJS + GraphQL + Sheets   | In Development | Crm API (backend) |

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

NODE_ENV=development
PORT=3000

# Used by firebase admin
GOOGLE_APPLICATION_CREDENTIALS=./path/to/service-account.json

SOURCE_DOC_ID='<sheets_source_doc_id>'
GOOGLE_SERVICE_ACCOUNT_EMAIL="<service-account@email-address>"
GOOGLE_PRIVATE_KEY="<private_key>"

```

### Run CRM API locally

- Run CRM API

```
nx serve crm-api
```

Go to http://localhost:3000/graphql to open the Apollo GraphQL sandbox

### General commands

- build application

```
nx build crm-api
```

- test application

```
nx test crm-api
```

- lint application

```
nx lint crm-api
```
