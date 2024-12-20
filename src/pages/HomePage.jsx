import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Crochet Blanket',
      description: 'Soft and cozy crochet blanket to add warmth to your home.',
      image: '/images/Crochet Blanket.jpg',
    },
    {
      id: 2,
      name: 'Crochet Hat',
      description: 'Stylish and warm crochet hats perfect for any occasion.',
      image: '/images/Crochet Hat.jpg',
    },
    {
      id: 3,
      name: 'Crochet Scarf',
      description: 'A beautiful crochet scarf to complement your winter wardrobe.',
      image: '/images/Crochet Scarf.jpg',
    },
    {
      id: 4,
      name: 'T-shirt',
      description: 'Summer t-shirt design, summer beach vacation t-shirts, summer surfing t-shirt vector design.',
      image: '/images/ts.jpg',
    },
    {
      id: 5,
      name: 'Teddy Bear',
      description: 'Meet the perfect gift for any holiday, birthday, or special occasion, the teddy bear with its own t-shirt.',
      image: '/images/br.jpg',
    },
    {
      id: 6,
      name: 'Chair',
      description: 'Ergonomic office chair that brings both comfort and style.',
      image: '/images/c.jpg',
    },
    {
      id: 7,
      name: 'Toys',
      description: 'A beautiful crochet Toys for Kids.',
      image: '/images/toys.jpg',
    },
    // Add more products as needed
  ];

  // Automatically cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [products.length]);

  return (
    <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-teal-100 min-h-screen overflow-x-hidden">
      {/* Main Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
             Crafting Comfort and Style <span className="text-teal-600">Made with Love</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
            "Our collection features an assortment of handcrafted items, including crochet accessories, stylish clothing, and special gifts. Each piece is uniquely designed to bring personality and charm to your home and wardrobe."


            </p>
            <Link to="/products">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600">
                Explore Our Collection
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/images/p.png" 
              alt="Crochet Creations"
              className="w-full max-w-md h-auto mx-auto rounded-lg shadow-lg animate-bounce"
            />
          </div>
        </div>
      </header>

      {/* Product Carousel Section */}
      <div className="py-16 bg-teal-100 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Products</h2>
        <div className="container mx-auto">
          {/* Image Slider Section */}
          <div className="relative">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-96 object-contain rounded-lg shadow-lg mb-4 transition-transform duration-1000"
            />
            {/* Left Arrow */}
            <div
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer"
              onClick={() => setCurrentIndex((currentIndex - 1 + products.length) % products.length)}
            >
              <i className="fas fa-chevron-left text-white text-3xl"></i>
            </div>
            {/* Right Arrow */}
            <div
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer"
              onClick={() => setCurrentIndex((currentIndex + 1) % products.length)}
            >
              <i className="fas fa-chevron-right text-white text-3xl"></i>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{products[currentIndex].name}</h3>
            <p className="text-gray-600">{products[currentIndex].description}</p>
            <Link to={`/product/${products[currentIndex].id}`}>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">What Our Customers Say</h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-12">
          <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            <p className="text-gray-700 mb-4">"Absolutely love these products! They are so soft and beautifully made. Will definitely order again!"</p>
            <p className="font-bold text-teal-600">Jessica M.</p>
            <div className="flex justify-center mt-4">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
          </div>
          <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
            <p className="text-gray-700 mb-4">"The crochet hats are so cute and cozy! I get compliments every time I wear one. Highly recommend!"</p>
            <p className="font-bold text-teal-600">Carlos S.</p>
            <div className="flex justify-center mt-4">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-teal-800 text-center">
        <p className="text-white text-sm">Follow us</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
