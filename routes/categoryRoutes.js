const express = require("express");

const {
    categoryControlller,
    createCategoryController,
    deleteCategoryCOntroller,
    singleCategoryController,
    updateCategoryController,
} = require("./../controllers/categoryController.js");
const { isAdmin, requiresSignIn } = require("../middlewares/authMiddleware.js");
const { default: slugify } = require("slugify");


const router = express.Router();

//routes

// create category
router.post(
    "/create-category",
    requiresSignIn,
    isAdmin,
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requiresSignIn,
    isAdmin,
    updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requiresSignIn,
    isAdmin,
    deleteCategoryCOntroller
);

module.exports = router;
