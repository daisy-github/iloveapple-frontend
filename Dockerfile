# base image
FROM node:10.3.0

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy app data
COPY . /usr/src/app
# Install app dependencies
RUN npm install --unsafe-perm

EXPOSE 80

# start app
CMD ["npm", "start"]
