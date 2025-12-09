import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Filter, CreditCard } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import CartSidebar from "../components/CartSidebar";
import toast from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addItem, getTotalItems, openCart } = useCart();
  const [user,setUser] = useState<any>(null);
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);
      const navigate=useNavigate();

  const categories = ["all", "books", "journals", "accessories"];

  const products = [
    {
      id: "1",
      title: "Transform Your Life Workbook",
      category: "books",
      price: 29.99,
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "A comprehensive workbook with exercises and prompts for personal transformation.",
      priceId:"product1"
    },
   
    {
      id: "2",
      title: "Daily Reflection Journal",
      category: "journals",
      price: 24.99,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Beautiful journal with guided prompts for daily reflection and gratitude.",
        priceId:"product2"
    },
    {
      id: "3",
      title: "Goal Setting Planner",
      category: "journals",
      price: 34.99,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/1493955/pexels-photo-1493955.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Strategic planner designed to help you set and achieve meaningful goals.",
        priceId:"product3"
    },
  
    {
      id: "4",
      title: "Affirmation Cards Set",
      category: "accessories",
      price: 19.99,
      rating: 4.5,
      reviews: 78,
      image:
        "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "50 beautifully designed cards with powerful affirmations for daily inspiration.",
        priceId:"product4"
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    });

    toast.success(`${product.title} added to cart! 🛒`, {
      duration: 3000,
      style: { fontSize: "14px", borderRadius: "10px" },
    });
  };

  const handleBuyNow = async (item: string) => {
  if (!user) {
    // Redirect to login if not signed in
    navigate('/login');
    return;
  }

  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }), // item: "service1" or "team"
    });

    const data = await res.json();

    if (data.url) {
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      console.error("No URL returned from API", data);
    }
  } catch (err) {
    console.error("Stripe checkout error:", err);
  }
};

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Sticky Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between mb-8 p-6 bg-white rounded-2xl shadow-lg  top-20 z-40 backdrop-blur-md bg-opacity-95"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* 🛒 Cart Icon */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={openCart}
          >
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">
              Cart ({getTotalItems()})
            </span>
          </div>
        </motion.div>

        {/* 🛍️ Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-gray-100 cursor-pointer text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center space-x-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add</span>
                    </button>
                    <button
                      onClick={() => handleBuyNow(product.priceId)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-1"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>

      {/* 🛍️ Cart Sidebar */}
      <CartSidebar />
    </div>
  );
};

export default Shop;
