const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// Create Product 
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  if(!products)
  {
    return next(new ErrorHander("No Products.", 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product 

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});


// Get Featured Products
exports.getFeatureProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({"featured": "true"});

  if(!products)
  {
    return next(new ErrorHander("No Products.", 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Products with price less than than value
exports.getPriceProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({price: {$lte:req.body.price}});

  if(!products)
  {
    return next(new ErrorHander("No Products.", 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Products with rating higher than than value
exports.getRatingProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({rating: {$gte:req.body.rating}});

  if(!products)
  {
    return next(new ErrorHander("No Products.", 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
});
