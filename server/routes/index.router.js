const express = require('express');
const router = express.Router();
const loginCrdt = require('../../food-ordering-app/src/assets/login-credentials.json')
const allFoodsCatg = require('../../food-ordering-app/src/assets/categories-type.json')

router.post('/authenticate', (req, res, next) => {
    const { userName, password } = req.body;
    if (userName == loginCrdt.userName || password == loginCrdt.password) {
        return res.status(200).json({ status: true, message: "User Verified" })
    } else {
        return res.status(404).json({ status: false, message: 'User Record Not Found. ' });
    }

});

router.get('/allFoodsCategories', (req, res, next) => {
    return res.status(200).json({ status: true, lst: allFoodsCatg })
});

module.exports = router;