const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Adjust the path if necessary

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB Connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/expensesDB'; // Use your env variable
const port = process.env.PORT || 5000; // Use your env variable or default

mongoose.connect(dbURI)
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch(err => console.error('Database connection error:', err));

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
