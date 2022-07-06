FROM node:18-alpine3.15

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN yarn

EXPOSE 3000

CMD [ "nodemon", "-L" ,"app.js" ]
