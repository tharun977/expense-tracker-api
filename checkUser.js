const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path if necessary

mongoose.connect('mongodb://localhost:27017/expensesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const user = await User.findOne({ email: 'john@example.com' }); // Replace with the email you're testing
    console.log(user);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
