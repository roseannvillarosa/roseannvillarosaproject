import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({ id: "", name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle user input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Create account
  const createAccount = () => {
    // Check for duplicate account by name or email
    const isDuplicate = users.some(
      (u) => u.name === user.name || u.email === user.email
    );

    if (isDuplicate) {
      setError("Account with the same name or email already exists.");
      return;
    }

    if (user.name && user.email) {
      setUsers([...users, { id: Date.now(), name: user.name, email: user.email }]);
      setUser({ id: "", name: "", email: "" });
      setError(""); // Clear error if account is created
    }
  };

  // Update account
  const updateAccount = (id) => {
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, name: user.name, email: user.email } : u
    );
    setUsers(updatedUsers);
    setUser({ id: "", name: "", email: "" });
  };

  // Delete account
  const deleteAccount = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
    setUser({ id: "", name: "", email: "" });
  };

  // Edit account to prefill the form
  const editAccount = (id) => {
    const userToEdit = users.find((u) => u.id === id);
    setUser(userToEdit);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">ShopRose</div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-8 text-lg">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-gray-300">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-300">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Get Started and Settings */}
        <div className="flex items-center gap-4">
          <button
            onClick={openModal} // Open the modal
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Create Account
          </button>
          <button
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            onClick={() => alert("Settings clicked!")}
          >
            {/* Settings Icon */}
            <i className="fas fa-cog text-white text-xl"></i>
          </button>
        </div>
      </div>

      {/* Modal for Account Creation, Update, or Deletion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {user.id ? "Update Account" : "Create Account"}
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
              className="border p-2 mb-2 w-full"
            />
            <div className="flex justify-between items-center">
              {error && (
                <p className="text-red-500 text-sm">{error}</p> // Show error message
              )}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={user.id ? () => updateAccount(user.id) : createAccount}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  {user.id ? "Update" : "Create"}
                </button>
                
                {/* Show Edit and Delete only if the user is updating an existing account */}
                {user.id && (
                  <>
                    <button
                      onClick={() => deleteAccount(user.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
