// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // This line reads the MONGO_URI from your .env file
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('MongoDB Connected...');
  } catch (err) {
  console.error("Database Connection Failed:", err); // Log the full error
  process.exit(1);
}
};

module.exports = connectDB;