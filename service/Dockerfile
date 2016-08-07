FROM node:6.3.0
MAINTAINER ITGEL GANBOLD

# Create app directory
RUN mkdir -p /usr/src/microservice
WORKDIR /usr/src/microservice

# Install app dependencies
ADD ./package.json /usr/src/microservice/
RUN npm install

# Bundle microservice source
COPY . /usr/src/microservice

EXPOSE 3000

CMD ["npm", "start"]
