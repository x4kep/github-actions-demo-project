# Use Node.js 20 base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all other source files
COPY . .

# Build your project (adjust if you have a different build command)
RUN npm run build

# Default command to run your app (adjust as needed)
CMD ["node", "index.js"]
