const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/products => GET
router.get("/get-all-products", adminController.getProducts);

//
router.get("/get-single-product/:productId", adminController.getProduct);
// update product
router.put("/update-product/:productId", adminController.updateProduct);
// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// router.get("/edit-product/:productId", adminController.getEditProduct);

// router.post("/edit-product", adminController.postEditProduct);

router.delete("/delete-product/:productId", adminController.postDeleteProduct);

module.exports = router;
