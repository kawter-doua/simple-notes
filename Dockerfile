# Use an official Node.js LTS image based on Alpine Linux (small footprint)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency manifests first—leverages Docker layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy the application source code
COPY . .

# Document the port the app listens on
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]