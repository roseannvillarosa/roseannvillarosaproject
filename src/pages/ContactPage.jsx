import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // After form submission logic
    console.log(formData);
    setIsSubmitted(true); // Set form submission status to true
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-teal-100 min-h-screen">
      {/* Main Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We'd love to hear from you! Reach out with any questions or feedback, and we'll get back to you as soon as possible.
          </p>
        </div>
      </header>

      {/* Contact Form & Confirmation Message */}
      <div className="flex justify-center space-x-12 mb-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Send Message
          </button>
        </form>

        {/* Confirmation Message */}
        {isSubmitted && (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Thank You for Reaching Out!</h2>
            <p className="text-gray-600">
              We have received your message and will get back to you as soon as possible.
            </p>
            <p className="text-lg text-gray-500 mt-4">
              We'll contact you at <span className="font-semibold">{formData.email}</span>.
            </p>
          </div>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">Visit Us</h2>
          <p className="text-lg text-gray-600">
            Feel free to reach out to us in person or online! We're always happy to assist you.
          </p>
          <div className="space-y-4">
            <p className="text-xl font-medium text-teal-600">Address:</p>
            <p className="text-lg text-gray-600">123 Crochet St., Handmade City, 56789</p>
            <p className="text-xl font-medium text-teal-600">Phone:</p>
            <p className="text-lg text-gray-600">+123 456 7890</p>
            <p className="text-xl font-medium text-teal-600">Email:</p>
            <p className="text-lg text-gray-600">contact@crochetstore.com</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 bg-teal-500 text-center">
        <p className="text-white text-sm">Follow us</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-white hover:text-teal-200">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="text-white hover:text-teal-200">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-white hover:text-teal-200">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
