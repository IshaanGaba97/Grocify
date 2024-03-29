const express = require('express');
const { registerController, loginController, testController, forgotPasswordController, updateProfileController, orderStatusController, getAllOrdersController, getOrdersController, getAllUsersController } = require('../controllers/authController');
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

//update profile
router.put("/profile", requiresSignIn, updateProfileController);

//orders
router.get("/orders", requiresSignIn, getOrdersController);

//all orders
router.get("/all-orders", requiresSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requiresSignIn,
    isAdmin,
    orderStatusController
);

//all users fetch
router.get("/all-users", requiresSignIn, isAdmin, getAllUsersController);

module.exports = router;