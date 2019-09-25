FROM node:12-alpine

COPY package.json yarn.lock .babelrc .env.dev .env.example /app/
WORKDIR /app

COPY node /app/node
COPY src /app/src
COPY webpack.js /app/webpack.js
COPY server.js /app/server.js

RUN yarn install
RUN npm install nodemon -g
RUN npm run build

ENTRYPOINT [ "nodemon", "server.js" ]