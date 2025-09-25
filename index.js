import { useState } from "react";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";
import { Label } from "/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MobileShop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [activePage, setActivePage] = useState("home");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "android", name: "Android" },
    { id: "iphone", name: "iPhone" },
    { id: "accessories", name: "Accessories" },
  ];

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: "$1199",
      category: "android",
      description: "Flagship Android smartphone with advanced camera system",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: "$1199",
      category: "iphone",
      description: "Premium iPhone with titanium design and powerful camera",
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: "$999",
      category: "android",
      description: "AI-powered smartphone with exceptional camera quality",
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      price: "$199",
      category: "accessories",
      description: "Noise-cancelling wireless earbuds with premium sound",
    },
    {
      id: 5,
      name: "iPhone 14",
      price: "$799",
      category: "iphone",
      description: "Powerful iPhone with advanced features at great value",
    },
    {
      id: 6,
      name: "Fast Charger 45W",
      price: "$49",
      category: "accessories",
      description: "Rapid charging solution for all mobile devices",
    },
  ];

  const featuredDeals = [
    {
      id: 101,
      name: "Weekend Special: Galaxy Z Flip",
      price: "$899",
      originalPrice: "$1099",
      description: "Limited time offer on foldable smartphone",
    },
    {
      id: 102,
      name: "Clearance: iPhone 13",
      price: "$599",
      originalPrice: "$799",
      description: "Last year's model at incredible price",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Excellent service and fast delivery! My new phone arrived perfectly packaged.",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment: "Great prices and good selection. Will shop here again.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "The customer support helped me choose the perfect phone for my needs.",
      date: "3 days ago",
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                MobileHub
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {["home", "shop", "about", "contact", "cart"].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activePage === page ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {page === "cart" ? `Cart (${cartItems.length})` : page}
                </button>
              ))}
            </nav>

            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {activePage === "home" && (
          <section className="mb-16">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 md:p-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Latest <span className="text-blue-400">Smartphones</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Discover the newest technology with cutting-edge features and premium performance
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">
                  Shop Now
                </Button>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Modern%20sleek%20smartphones%20floating%20in%20dark%20background%20with%20blue%20glow%20effects&id=hero-smartphones" 
                  alt="Latest smartphones floating in dark background with blue glow effects" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </section>
        )}

        {/* Search and Filters */}
        {(activePage === "home" || activePage === "shop") && (
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`border ${
                      activeCategory === category.id 
                        ? "bg-blue-500 border-blue-500" 
                        : "border-gray-700 text-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products Grid */}
        {(activePage === "home" || activePage === "shop") && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              {activeCategory === "all" ? "All Products" : `${categories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`https://placeholder-image-service.onrender.com/image/400x300?prompt=${encodeURIComponent(product.name)}%20smartphone%20product%20shot%20on%20dark%20background&id=product-${product.id}`} 
                      alt={`${product.name} smartphone product shot on dark background`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-400">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-blue-500 hover:bg-blue-600"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Featured Deals */}
        {activePage === "home" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredDeals.map((deal) => (
                <Card key={deal.id} className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-400/20 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{deal.name}</CardTitle>
                    <CardDescription className="text-gray-400">{deal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold text-green-400">{deal.price}</p>
                      <p className="text-lg text-gray-500 line-through">{deal.originalPrice}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                      Get Deal
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Customer Reviews */}
        {activePage === "home" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{review.name}</CardTitle>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* About Us Page */}
        {activePage === "about" && (
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">About MobileHub</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/500x400?prompt=Modern%20mobile%20phone%20store%20interior%20with%20sleek%20display%20counters%20and%20dark%20theme&id=about-store" 
                    alt="Modern mobile phone store interior with sleek display counters and dark theme"
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <p className="text-gray-300 text-lg mb-4">
                    MobileHub is your premier destination for the latest smartphones and accessories. 
                    Founded in 2020, we've been providing customers with top-quality devices and 
                    exceptional service.
                  </p>
                  <p className="text-gray-300 text-lg mb-4">
                    Our mission is to make cutting-edge technology accessible to everyone while 
                    maintaining the highest standards of customer satisfaction.
                  </p>
                  <p className="text-gray-300 text-lg">
                    We offer a curated selection of Android and iOS devices, along with premium 
                    accessories to enhance your mobile experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Page */}
        {activePage === "contact" && (
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-400">
                    Have questions? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Cart Page */}
        {activePage === "cart" && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Your Cart</h2>
            {cartItems.length === 0 ? (
              <Card className="bg-gray-900 border-gray-800 text-center py-12">
                <CardContent>
                  <p className="text-gray-400 text-lg">Your cart is empty</p>
                  <Button 
                    onClick={() => setActivePage("shop")}
                    className="mt-4 bg-blue-500 hover:bg-blue-600"
                  >
                    Start Shopping
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={`https://placeholder-image-service.onrender.com/image/100x100?prompt=${encodeURIComponent(item.name)}%20product%20thumbnail&id=cart-${item.id}`} 
                          alt={`${item.name} product thumbnail`}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{item.name}</h3>
                          <p className="text-blue-400">{item.price}</p>
                        </div>
                      </div>
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                <Card className="bg-gray-900 border-gray-800 mt-8">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white font-semibold">
                        ${cartItems.reduce((total, item) => total + parseInt(item.price.replace('$', '')), 0)}
                      </span>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">MobileHub</h3>
              <p className="text-gray-400">
                Your trusted partner for all mobile technology needs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["home", "shop", "about", "contact"].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => setActivePage(page)}
                      className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button 
                      onClick={() => {
                        setActiveCategory(category.id);
                        setActivePage("shop");
                      }}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400">123 Tech Street</p>
              <p className="text-gray-400">San Francisco, CA 94103</p>
              <p className="text-gray-400">info@mobilehub.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 MobileHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileShop;
