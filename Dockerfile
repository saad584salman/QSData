# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json first to install dependencies (Docker cache optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of your files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
