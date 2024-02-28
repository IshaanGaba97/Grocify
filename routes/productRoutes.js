const express = require('express');
const formidable = require('express-formidable');
const { requiresSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createProductController, updateProductController, getProductController, getSingleProductController, productPhotoController, deleteProductController } = require('../controllers/productController');

const router = express.Router();

//routes
router.post(
    "/create-product",
    requiresSignIn,
    isAdmin,
    formidable(),
    createProductController
);
//update product
router.put(
    "/update-product/:pid",
    requiresSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

module.exports = router;