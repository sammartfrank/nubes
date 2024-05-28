# Use a Docker image with Homebrew pre-installed
FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json  ./

# Install dependencies
RUN npm install

COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]


