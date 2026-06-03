# stage 1

FROM  node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# stage 2

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY --from=builder /app ./

EXPOSE 8000

CMD ["npm","start"]
