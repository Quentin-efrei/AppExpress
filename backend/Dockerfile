FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
EXPOSE 8000
RUN npm install 
COPY . .
CMD [ "npm", "run","start"]