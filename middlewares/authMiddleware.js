const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

// sign in for protected routes 
const requiresSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET);
            req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

// admin access
const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== 1) {
            res.send({
                success:false,
                message:'UnAuthorized access'
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:'Error in isAdmin middleware',
            error
        })
    }
}

module.exports = { requiresSignIn, isAdmin };