FROM node:12-alpine

COPY package.json yarn.lock \
.env.dev .env.example \
babel.config.js next-env.d.ts next.config.js \
tsconfig.json tsconfig-node.json /app/

WORKDIR /app

COPY node /app/node
COPY src /app/src
COPY pages /app/pages
COPY src/static /app/public/static
COPY webpack.js /app/webpack.js
COPY server.js /app/server.js

RUN yarn install
RUN npm run build
RUN npm run next-build
RUN npm run next-export

# ENTRYPOINT [ "ts-node", "--project", "tsconfig-node.json", "--log-error", "server.js" ]
ENTRYPOINT [ "npm", "run", "serve" ]
