const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Load environment variables
const questionroutes = require('./Routes/questionsroutes');
const cors = require('cors');  // Import CORS

const app = express();

// CORS options to allow only the specified frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend URL
  methods: 'GET,POST,DELETE', // Allowed HTTP methods
  allowedHeaders: 'Content-Type', // Allowed headers
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(questionroutes);

// Routes
// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
