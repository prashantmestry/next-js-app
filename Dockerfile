# Stage 1: Build
FROM node:18-alpine AS BUILD_IMAGE

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install dependencies for production
# COPY package.json package-lock.json ./
# RUN npm install --only=production

# Copy the built files from the builder stage
COPY --from=BUILD_IMAGE /app/.next ./.next
# COPY --from=builder /app/public ./public
COPY --from=BUILD_IMAGE /app/next.config.mjs ./next.config.mjs

# Set environment variable for production
# ENV NODE_ENV production

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "dev"]
