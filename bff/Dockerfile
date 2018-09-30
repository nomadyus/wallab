FROM node:8-alpine

## Environment variables
ENV PORT 9001
ENV NODE_ENV 'production'

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Argumemts
ARG API_URL='http://localhost:9002'

EXPOSE $PORT
CMD [ "npm", "start" ]