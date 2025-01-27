# Use the official Node.js image as the base image
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app

COPY package*.json ./
# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .
# Build the Vite project
RUN npm run build

# Use a lightweight server to serve the static files
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/

# Copy built files from the previous stage to the nginx web server's folder
COPY --from=BUILD_IMAGE /app/dist /app/dist/
EXPOSE 8080

COPY package.json .
# COPY vite.config.js .

# RUN npm install typescript

# Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "dev"]