FROM node:16-alpine3.14

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

EXPOSE 8000
ENV PORT=8000

COPY . .

CMD ["yarn", "start"]
