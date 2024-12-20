import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart modal visibility

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  // Handle Search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(null);
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pt-20">
        <div className="flex items-center justify-between w-full max-w-5xl px-4 mb-6">
          <h1 className="text-5xl">Shop Now</h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border px-4 py-2 rounded-md w-64"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-2 border-2 rounded-md cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="rounded-md mb-2"
              />
              <div className="truncate font-semibold">{product.title}</div>
              <div className="text-lg font-medium text-red-500">
                ${product.price || "N/A"}
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-96 max-w-lg">
              <h2 className="text-xl font-semibold mb-4">
                {selectedProduct.title}
              </h2>
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="rounded-md mb-4 w-full"
              />
              <p className="text-gray-700 text-sm mb-4">
                {selectedProduct.description}
              </p>
              <div className="text-lg font-bold text-red-500 mb-6">
                ${selectedProduct.price || "N/A"}
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                  onClick={() => addToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                  onClick={() => alert("Proceeding to checkout...")}
                >
                  Buy Now
                </button>
              </div>
              <button
                className="mt-4 text-sm text-gray-500 underline"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cart Button */}
<button
  className="fixed top-20 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md z-50"
  onClick={() => setIsCartOpen(!isCartOpen)} // Toggle Cart Modal
>
  Cart ({cart.length})
</button>

{/* Cart Modal */}
{isCartOpen && (
  <div className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-80 border-l p-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-4">Cart</h2>
    {cart.length > 0 ? (
      <>
        <ul className="space-y-4 mb-6">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price || "N/A"}</p>
              </div>
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-12 h-12 rounded-md"
              />
            </li>
          ))}
        </ul>
        {/* Buy and Close Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
            onClick={() => alert("Proceeding to buy items...")}
          >
            Buy
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
            onClick={() => setIsCartOpen(false)}
          >
            Close
          </button>
        </div>
      </>
    ) : (
      <p className="text-gray-600">Your cart is empty.</p>
    )}
  </div>
)}


    </div>
  );
}

export default ProductsPage;
