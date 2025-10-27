import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Heart, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "../firebase"; // import your auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Podcast", path: "/podcast" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const isActive = (path: string) => {
    if (path === "/#services") {
      return location.pathname === "/" && location.hash === "#services";
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path === "/#services") {
      e.preventDefault();
      if (location.pathname === "/") {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowUserMenu(false);
    toast.success("Logged out successfully!")
    navigate("/login"); // optional redirect after logout
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Heart className="h-8 w-8 text-rose-500" />
            <Link to="/">
              <span className="font-bold text-xl cursor-pointer text-gray-800">Head2Heart</span>
            </Link>
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to={user ? "/booking" : "/login"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Book Now
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <User className="h-6 w-6 text-gray-700" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-32 bg-white  shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <LogOut className="inline h-4 w-4 mr-2" /> Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  to={user ? "/booking" : "/login"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  Book Now
                </Link>

                {user ? (
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      <LogOut className="inline h-4 w-4 mr-2" /> Log Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center font-medium hover:from-blue-700 hover:to-slate-800 transition-all duration-200"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
