FROM node:16

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the application
RUN yarn build

# Install a simple static file server
RUN yarn global add serve

# Expose port 3000
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"] 