# Use an official Node runtime as the parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY ./package.json  ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]
