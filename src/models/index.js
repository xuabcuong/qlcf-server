const Account = require("../modules/account/router");

router.get('/accounts/:id', async (req, res) => {
    const accountId = req.params.id;
    const account = await Account.findById(accountId);

    if (!account) {
        return res.status(404).json({ message: 'Tài khoản không tồn tại' });
    }

    const email = account.email;
    return res.json({ email });
});