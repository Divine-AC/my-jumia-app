const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRoute');

app.use(express.json());

// 1. Connect to MongoDB (Replace with your connection string if using MongoDB Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/inventory_db')
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 2. Mount Routes
app.use('/products', productRouter);

// 3. Start Server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});