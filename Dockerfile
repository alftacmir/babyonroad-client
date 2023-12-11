FROM node:14 as builder 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
