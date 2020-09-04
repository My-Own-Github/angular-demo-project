const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const loginCrdts = require('../../food-ordering-app/src/assets/login-credentials.json')
const allFoodsCatg = require('../../food-ordering-app/src/assets/categories-type.json')
const users = [];


router.post('/authenticate', async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(loginCrdts.password, 10)
    let user = { userName: loginCrdts.userName, password: hashedPassword }
    users.push(user);
    user = users.find(user => user.userName == req.body.userName);
    if (user == null) {
        return res.status(404).json({ status: false, message: 'User Record Not Found.' });
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password) && user) {
            return res.status(200).json({ status: true, message: "User Verified" })
        } else {
            return res.status(404).json({ status: false, message: 'Wrong Password' });
        }
    } catch{
        return res.status(500).send("Server Error")
    }
    users = [];

});

router.get('/allFoodsCategories', (req, res, next) => {
    return res.status(200).json({ status: true, lst: allFoodsCatg })
});

module.exports = router;