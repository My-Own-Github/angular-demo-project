


// const User = mongoose.model('User');


// module.exports.register = (req, res, next) => {
//     console.log("connection for registration")
//     let user = new User();
//     user.fullName = req.body.fullName;
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.save((err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             if (err.code === 11000) {
//                 res.status(422).send(['Dublicate Email address Found.'])
//             } else {
//                 return next(err);
//             }
//         }
//     })
// }

module.exports.authenticate = (req, res, next) => {
    return res.status(200).json({message: 'Hello'})

}

// module.exports.userProfile = (req, res, next) => {
//     User.findOne({  email: req.body.email },
//         (err, user) => {
//             if (err)
//                 return res.status(404).json({ status: false, message: 'User Record Not Found. ' });
//             else
//                 return res.status(200).json({ status: true, data: user })
//                 // _.pick(user, ['fullName', 'email'])
//         })
// }