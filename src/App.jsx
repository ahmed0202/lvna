import React, { useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      img: "/p1.jpg",
      title: "WKL831 ORGANIC RICE SKIN CARE SET 5in1",
    },
    {
      img: "/p2.jpg",
      title: "WKL858 ORGANIC RICE WHITENING FACE & BODY SOAP 120g",
    },
    {
      img: "/p3.jpg",
      title: "WKL731 ORGANIC RICE FOAM CLEANSER 150ml",
    },
    {
      img: "/p4.jpg",
      title: "WKL827 90+ RICE SUNSCREEN PROTECT SPRAY 200ml",
    },
    {
      img: "/p5.jpg",
      title: "WKL826 60+ RICE SUNSCREEN PROTECT SPRAY 200ml",
    },
    {
      img: "/p6.jpg",
      title: "WKL744 ORGANIC RICE FACIAL LOTION 200ml",
    },
    {
      img: "/p7.jpg",
      title: "WKL743 ORGANIC RICE FACIAL TONER 200ml",
    },
    {
      img: "/p8.jpg",
      title: "WKL748 ORGANIC RICE ANTI-SPOT CREAM 55ml",
    },
    {
      img: "/p9.jpg",
      title: "WKL747 ORGANIC RICE WHITENING CREAM 55ml",
    },
    {
      img: "/p10.jpg",
      title: "WKL746 ORGANIC RICE NIGHT CREAM 55ml",
    },
  ];

  const features = [
    {
      icon: "✨",
      title: "Quality",
      description:
        "We use superior materials and unique designs to provide you with the highest quality.",
    },
    {
      icon: "🎯",
      title: "Options",
      description:
        "Extensive range of skincare products tailored to meet your specific needs and preferences.",
    },
    {
      icon: "🛡️",
      title: "Safety",
      description:
        "Your safety is our top priority. All our products are tested and certified for safe use.",
    },
    {
      icon: "⭐",
      title: "Warranty",
      description:
        "We stand behind our products with considerate services and quality guarantee.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="/logo-lvna.png"
                className="size-14 md:size-20 rounded-lg "
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("home");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-purple-200 transition"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-purple-200 transition"
              >
                About Us
              </a>
              <div className="relative group">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("products");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-purple-200 transition flex items-center"
                >
                  Products
                </button>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-purple-200 transition"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-14" />
              ) : (
                <Menu className="size-14" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("home");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 hover:text-purple-200"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 hover:text-purple-200"
              >
                About Us
              </a>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("products");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 hover:text-purple-200"
              >
                Products
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 hover:text-purple-200"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white py-24 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Yiwu Lvna Import and Export Co. Ltd
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Our Company is based in china we provide many products in many
            fields, We are certified agent for wokali brand
          </p>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img
                src="/image1.jpg"
                alt="Gold Mask"
                className="w-full h-64 object-fill group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  WKL403 GOLD MASK PEEL-OFF MASK
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img
                src="/image2.jpg"
                alt="Face Wash"
                className="w-full h-64 object-fill group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  WKL711 VITAMIN C FACE WASH 120ml
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img
                src="/image3.jpg"
                alt="Product List"
                className="w-full h-64 object-fill group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  COLLAGEN SERIES PRODUCTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-purple-50 transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1  gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  1st Floor Building 1, No.2223 Xuefeng West Road, Chengxi
                  Street, Yiwu City, Jinhua City, Zhejiang Free Trade Pilot
                  Zone, China
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                0086-13575949229
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                157658003@qq.com
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p>Copyright © 2025</p>
        </div>
      </footer>
    </div>
  );
}
