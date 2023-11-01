FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
RUN npm run build

FROM node:18-alpine as PRODUCT_IMAGE
WORKDIR /app

COPY --from=BUILD_IMAGE /app .
EXPOSE 3000

COPY package.json .
COPY vite.config.js .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "preview" ]


