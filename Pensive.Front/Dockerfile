FROM node:17-alpine
# TODO delete it
# Dependency for sass
RUN apk add --no-cache python3 g++ make
# Fix svg loader
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY . .
RUN npm i

# TODO заменить на build
CMD ["npm", "start"]
EXPOSE 3000
