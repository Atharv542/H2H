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

  const categories = ["all", "worksheets", "journals", "accessories"];

  const products = [
  {
    id: "1",
    title: "Daily reflection journal",
    category: "journals",
    price: 24.99,
    rating: 4.7,
    reviews: 203,
    image:
      "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Beautiful journal with guided prompts for daily reflection and gratitude.",
    priceId: "product1",
  },

  {
    id: "2",
    title: "Goal setting planner",
    category: "accessories",
    price: 24.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Structured planner to define goals and track daily progress.",
    priceId: "product2",
  },
  {
    id: "3",
    title: "Mindful daily log",
    category: "accessories",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://i.etsystatic.com/24721769/r/il/17c0ab/2502013776/il_1140xN.2502013776_8o3s.jpg",
    description:
      "Daily log to cultivate mindfulness and self-awareness.",
    priceId: "product3",
  },
  {
    id: "4",
    title: "Daily winning routines",
    category: "accessories",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "DAILY WINNING ROUTINES.jpg",
    description:
      "Routine builder for productivity and consistency.",
    priceId: "product4",
  },
  {
    id: "5",
    title: "Build motivation",
    category: "accessories",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "BUILD MOTIVATION.jpg",
    description:
      "Motivation-building exercises to stay inspired.",
    priceId: "product5",
  },
  {
    id: "6",
    title: "5 Min simple morning practices",
    category: "accessories",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Quick morning practices to start your day with clarity.",
    priceId: "product6",
  },
  {
    id: "7",
    title: " Fixed mindset vs Growth mindset",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Worksheets designed to reshape your mindset.",
    priceId: "product7",
  },
  {
    id: "8",
    title: "A night routine worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Night routine planner for better sleep and reflection.",
    priceId: "product8",
  },
  {
    id: "9",
    title: "A morning routine worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Morning routine worksheet for a productive start.",
    priceId: "product9",
  },
  {
    id: "10",
    title: "An attitude worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "An Attitude Worksheet.jpg",
    description:
      "Improve your attitude with guided exercises.",
    priceId: "product10",
  },
  {
    id: "11",
    title: "A law of attraction worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "https://i.etsystatic.com/49179139/r/il/c4cad1/6597212031/il_1588xN.6597212031_frim.jpg",
    description:
      "Manifest goals using law of attraction techniques.",
    priceId: "product11",
  },
  {
    id: "12",
    title: "A paradigm shift worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "A Paradigm Shift Worksheet.jpg",
    description:
      "Shift thinking patterns for long-term change.",
    priceId: "product12",
  },
  {
    id: "13",
    title: "Personal development worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "Personal Development Worksheet.jpg",
    description:
      "Personal growth exercises for self-improvement.",
    priceId: "product13",
  },
  {
    id: "14",
    title: "Mindfulness worksheet",
    category: "worksheets",
    price: 19.99,
    rating: 4.5,
    reviews: 78,
    image:
      "Mindfulness Worksheet.jpg",
    description:
      "Mindfulness worksheets for calm and focus.",
    priceId: "product14",
  },
];


  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  

  const handleBuyNow = async (item: string) => {
   if (!user) {
    toast.error("Please login first!");
    navigate("/login");
    return;
  }

  if (!user.emailVerified) {
    toast.error("Please verify your email before making a purchase.");
    return;
  }

  try {
    const res = await fetch("/api/shop-checkout-session", {
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
          {/*<div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={openCart}
          >
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">
              Cart ({getTotalItems()})
            </span>
          </div>*/}
        </motion.div>

        {/* 🛍️ Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {/*<button
                      onClick={() => handleAddToCart(product)}
                      className="bg-gray-100 cursor-pointer text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center space-x-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add</span>
                    </button>*/}
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
