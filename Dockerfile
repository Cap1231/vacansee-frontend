FROM node:16-alpine3.14
WORKDIR /usr/src/app
EXPOSE 8000
COPY package.json ./
RUN yarn install
# COPY . .
# CMD ["yarn", "start"]
