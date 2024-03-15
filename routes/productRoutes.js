const express = require('express');
const formidable = require('express-formidable');
const { requiresSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createProductController, updateProductController, getProductController, getSingleProductController, productPhotoController, deleteProductController, productFiltersController, productCountController, productListController, searchProductController, realtedProductController, productCategoryController } = require('../controllers/productController');

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
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

module.exports = router;