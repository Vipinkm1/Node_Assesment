const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { getCart, addToCart,removeCartItem,} = require("../controllers/cartController");

router.get("/", authMiddleware, getCart);

router.post("/", authMiddleware, addToCart);

router.delete("/:id",authMiddleware,removeCartItem);

module.exports = router;