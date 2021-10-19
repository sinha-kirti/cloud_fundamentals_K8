FROM node:12-alpine3.9
COPY package*.json ./
RUN npm ci
COPY src ./src/
COPY migrations ./migrations/
ENTRYPOINT ["npm", "start"]