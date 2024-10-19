const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      splitMethod: { type: String, enum: ['Equal', 'Exact', 'Percentage'], required: true },
      amountOwed: { type: Number }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
