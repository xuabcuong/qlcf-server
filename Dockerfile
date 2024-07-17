FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/src

EXPOSE 3000

CMD ["node", "app.js"]
