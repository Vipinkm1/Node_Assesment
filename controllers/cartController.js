const {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
} = require("../services/cartService");

const getCart = async (req, res) => {
  try {
    const cart = await getUserCart(req.user.id);

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addToCart = async (req, res) => {
  try {
    const cartItem = await addItemToCart({
      user: req.user.id,
      product: req.body.product,
      quantity: req.body.quantity,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    await removeItemFromCart(req.params.id);

    res.json({
      message: "Cart Item Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeCartItem,
};