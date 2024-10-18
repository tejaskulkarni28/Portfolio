# Use the official Node.js image.
FROM node:18

# Set the working directory in the container.
WORKDIR /client

# Copy package.json and package-lock.json to install dependencies.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of your application code.
COPY . .

# Expose the port your app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]
