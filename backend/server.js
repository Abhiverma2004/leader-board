// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { seedUsers } = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', userRoutes);

// Function to start the server
const startServer = async () => {
  try {
    // Wait for the database connection to succeed
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      // Seed users after server starts
      seedUsers();
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

// Start the server
startServer();