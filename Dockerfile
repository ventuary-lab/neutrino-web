FROM node:12-alpine

COPY package.json yarn.lock \
.babelrc .env.dev .env.example \
tsconfig.json tsconfig-node.json /app/

WORKDIR /app

COPY node /app/node
COPY src /app/src
COPY src/static /app/public
COPY webpack.js /app/webpack.js
COPY server.js /app/server.js

RUN yarn install
RUN npm install ts-node -g
RUN npm run build

ENTRYPOINT [ "ts-node", "--project", "tsconfig-node.json", "--log-error", "server.js" ]
