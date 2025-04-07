FROM node:16

WORKDIR /app

# Copy the rest of the code
COPY . .

# Install dependencies
RUN yarn install

# Build the application
RUN yarn build

# Install a simple static file server
RUN yarn global add serve

# Expose port 3000
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"] 