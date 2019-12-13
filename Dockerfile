FROM node:12-alpine
FROM bash:4.4

COPY package.json yarn.lock \
.env.dev .env.example server-wrap.sh \
babel.config.js next-env.d.ts next.config.js \
tsconfig.json tsconfig-node.json /app/

WORKDIR /app

COPY node /app/node
COPY src /app/src
COPY pages /app/pages
COPY src/static /app/public/static
COPY src/style /app/public/style
COPY webpack.js /app/webpack.js
COPY server.js /app/server.js

RUN yarn install
RUN npm install -g npm
RUN npm run build
RUN npm run next-build
RUN npm run next-export

# ENTRYPOINT [ "ts-node", "--project", "tsconfig-node.json", "--log-error", "server.js" ]
ENTRYPOINT [ "bash", "server-wrap.sh", "--command", "serve", "--timeout", "1m" ]
