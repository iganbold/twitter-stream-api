FROM node:6.3.0
MAINTAINER ITGEL GANBOLD

RUN npm install nodemon -g

# Create app directory
RUN mkdir -p /usr/src/microservice
WORKDIR /usr/src/microservice

# Install app dependencies
ADD ./package.json /usr/src/microservice/
RUN npm install

# Bundle microservice source
ADD . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
