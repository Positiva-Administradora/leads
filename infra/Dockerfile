# Dockerfile

# Start from the official Node.js LTS base image
FROM node:20.5.1

ARG NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ
ARG NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ

ENV NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ=$NEXT_PUBLIC_CHATWOOT_BASE_URL_WIZ
ENV NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ=${NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN_WIZ}

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

RUN yarn cache clean --force
RUN yarn install

# Copy all files
COPY . .

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3002

# Run npm start script
CMD ["npm", "start"]
