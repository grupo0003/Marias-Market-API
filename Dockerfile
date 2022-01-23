FROM node:16.13.2
RUN mkdir /app
COPY . /app/
COPY ./.env /app/
WORKDIR /app/
RUN cat .env.production
RUN npm install --production