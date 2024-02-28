const express = require('express');
const { registerController, loginController, testController, forgotPasswordController } = require('../controllers/authController');
const { requiresSignIn, isAdmin } = require('../middlewares/authMiddleware')

// router object 
const router = express.Router();

//routing
// REGISTER || METHOD POST 
router.post('/register', registerController);

//LOGIN || METHOD POST
router.post('/login', loginController);

//FORGOT PASSWORD || METHOD POST
router.post('/forgot-password', forgotPasswordController);

//protected user auth route 
router.get('/user-auth', requiresSignIn, (req, res) => {
    res.status(200).send({ ok: true })
});

//protected admin auth route 
router.get('/admin-auth', requiresSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
});

//test route 
router.get('/test', requiresSignIn, isAdmin, testController);

module.exports = router;