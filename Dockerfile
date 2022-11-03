FROM node:16.14.2 as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --legacy-peer-deps
COPY . /app

RUN npm run build
FROM nginx:1.21.1
#COPY build /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 89
