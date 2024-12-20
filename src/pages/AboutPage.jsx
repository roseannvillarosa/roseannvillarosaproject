import { Link } from 'react-router';

function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-teal-100 min-h-screen">
      {/* Main Section */}
      <header className="pt-32 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Us: <span className="text-teal-600">Our Story & Style</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
            Every piece we create is made with love and dedication, crafted to bring style, comfort, and a touch of individuality to your life. Our team is committed to delivering high-quality products that stand the test of time
            </p>
            <Link to="/contact">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600">
                Get in Touch
              </button>
            </Link>
          </div>

          
          <div className="md:w-1/2">
            <img
              src="/images/about.jpg" 
              alt="About Us"
              className="w-full max-w-md h-auto mx-auto rounded-lg shadow-lg animate-bounce"
            />
          </div>
        </div>
      </header>

    
      <div className="mt-12 py-6 bg-white text-center shadow-md">
        <p className="text-gray-600 text-sm">Follow us</p>
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
      </div>
    </div>
  );
}

export default AboutPage;
