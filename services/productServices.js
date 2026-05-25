const Product = require("../models/product");

const getAllProducts = async () => {
  return await Product.find();
};

const getSingleProduct = async (id) => {
  return await Product.findById(id);
};

const createNewProduct = async (data) => {
  return await Product.create(data);
};

const updateExistingProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const deleteExistingProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
};