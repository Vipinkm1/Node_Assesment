const Cart = require("../models/cart");

const getUserCart = async (userId) => {
  return await Cart.find({ user: userId }).populate("product");
};

const addItemToCart = async (data) => {
  return await Cart.create(data);
};

const removeItemFromCart = async (id) => {
  return await Cart.findByIdAndDelete(id);
};

module.exports = {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
};