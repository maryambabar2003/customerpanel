const express = require("express");
const connectDB = require("./config/db"); 

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB(); // This will establish the connection to MongoDB

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes"); 

// Use routes
app.use("/api/users", userRoutes);

// Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
