FROM node:16.13.2
RUN mkdir /app
COPY . /app/
COPY ./.env /app/
WORKDIR /app/
RUN npm install --production
