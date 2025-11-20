# Step 1: Use a lightweight Node base image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first (for caching layers)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the backend code
COPY . .

# Step 6: Expose backend port
EXPOSE 3000

# Step 7: Start the application
CMD ["npm", "start"]
