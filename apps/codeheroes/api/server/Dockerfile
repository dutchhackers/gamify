# FROM node:16-slim

# WORKDIR /app
# COPY ./dist/apps/codeheroes-api .

# COPY ./package*.json ./

# RUN npm ci -only=production
# # COPY . ./
# CMD NODE_ENV=production node ./main.js


FROM node:16-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json ./

RUN npm install -only=production

COPY ./dist/apps/codeheroes-api ./

CMD node ./main.js