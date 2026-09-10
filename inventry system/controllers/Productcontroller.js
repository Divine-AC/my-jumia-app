const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const { name, size, color, description, price, quantity } = req.body;
    const newProduct = new Product({ name, size, color, description, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, size, color, description, price, quantity } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, size, color, description, price, quantity },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};