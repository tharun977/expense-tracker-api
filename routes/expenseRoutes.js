const express = require('express');
const { addExpense, getUserExpenses, getOverallExpenses, downloadBalanceSheet } = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/:userId', getUserExpenses);
router.get('/all', getOverallExpenses);
router.get('/download', downloadBalanceSheet);

module.exports = router;
