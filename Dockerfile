
# Use a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install --production

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
