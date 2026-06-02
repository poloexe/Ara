import User from "../models/user.js";

export const getCartProducts = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "cartItems.product",
    );
    return res.status(200).json(user.cartItems);
  } catch (error) {
    console.error(`Error fetching cart products: ${error.message}`);
    return res
      .status(500)
      .json({ msg: "Oops! We couldn't fetch your cart items" });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, size } = req.body;
    const user = await User.findById(req.user._id);

    const existingItem = user.cartItems.find(
      (item) => item.product.toString() === productId && item.size === size,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartItems.push({ product: productId, size });
    }

    await user.save();
    return res.status(200).json(user.cartItems);
  } catch (error) {
    console.error(`Error adding to cart: ${error.message}`);
    return res.status(500).json({ msg: "Oops! We couldn't add to your cart" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId, size } = req.body;
    const user = await User.findById(req.user._id);

    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter(
        (item) => !(item.product.toString() === productId && item.size === size),
      );
    }

    await user.save();
    return res.status(200).json(user.cartItems);
  } catch (error) {
    console.error(`Error removing your item(s): ${error.message}`);
    return res
      .status(500)
      .json({ msg: "Oops! We couldn't remove your item(s)" });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { productId, size, action } = req.body;
    const user = await User.findById(req.user._id);

    const existingItem = user.cartItems.find(
      (item) => item.product.toString() === productId && item.size === size,
    );

    if (existingItem) {
      if (action === "decrease" && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (action === "decrease" && existingItem.quantity === 1) {
        user.cartItems = user.cartItems.filter(
          (item) =>
            !(item.product.toString() === productId && item.size === size),
        );
      }
    }

    await user.save();
    res.status(200).json(user.cartItems);
  } catch (error) {
    res.status(500).json({ msg: "Failed to update quantity" });
  }
};
