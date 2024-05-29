# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install client dependencies and build the client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Generate self-signed certificates
WORKDIR /app
RUN mkdir certs
RUN openssl req -nodes -new -x509 -keyout certs/key.pem -out certs/cert.pem -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"


# Install PM2 globally
RUN npm install pm2 -g

# Expose port 3000
EXPOSE 3000

# Start the server using PM2
CMD ["pm2-runtime", "ecosystem.config.js"]
