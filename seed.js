const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path to your User model

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/expensesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Hardcode a user
    const email = 'john@example.com';
    const password = 'password123'; // This will be hashed

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', existingUser);
      return mongoose.disconnect(); // Disconnect if user already exists
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name: 'John Doe',
      email: email,
      mobile: '1234567890', // Example mobile number
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    console.log('User created:', newUser);

    // Disconnect from the database
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    mongoose.disconnect();
  });
