const express = require('express');
const router = express.Router();
const Account = require('../models/Account'); // Assuming your model file is named Account.js

// API endpoint to get username by AccountID
router.get('/username/:accountId', async (req, res) => {
  try {
    const { accountId } = req.params;

    const account = await Account.findOne({
      where: { AccountID: accountId }
    });

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.json({ username: account.Username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
