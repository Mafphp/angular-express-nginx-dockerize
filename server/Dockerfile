FROM node:alpine

WORKDIR /usr/server

COPY ./ ./

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]

