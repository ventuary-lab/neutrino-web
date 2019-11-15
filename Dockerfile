FROM node:12-alpine

COPY package.json yarn.lock .babelrc .env.dev .env.example tsconfig.json /app/
WORKDIR /app

COPY node /app/node
COPY src /app/src
COPY webpack.js /app/webpack.js
COPY server.js /app/server.js

RUN yarn install
RUN npm install ts-node -g
RUN npm run build

ENTRYPOINT [ "ts-node", "--log-error", "server.js" ]
s