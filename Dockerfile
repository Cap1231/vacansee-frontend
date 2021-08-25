FROM node:16-alpine3.14
WORKDIR /usr/src/app
EXPOSE 8000
# COPY ["package.json", "yarn.lock", "./"]
COPY . .
RUN yarn install
CMD ["yarn", "start"]
