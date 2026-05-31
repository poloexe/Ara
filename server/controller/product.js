import Product from "../models/product.js";
import cloudinary from "../config/cloudinary.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, inStock } = req.body;

    if (!image) {
      res.status(400).json({ msg: "Please provide an image!" });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "ara_products",
    });

    const product = new Product({
      name,
      description,
      price,
      image: uploadResponse.secure_url,
      category,
      inStock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(`Error creating product: ${error.message}`);
    res.status(500).json({ msg: "Oops! We couldn't create product" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
    res.status(500).json({ msg: "Oops we couldn't fetch product" });
  }
};
