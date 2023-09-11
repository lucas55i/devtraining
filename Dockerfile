FROM node:18.17-alpine3.18

RUN apk add --no-cache bach

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app