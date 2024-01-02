import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the bars icon
import logo from "../assets/Logo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={logo} alt="Company Logo" />
            </div>
          </div>
          <div className="hidden sm:block ml-auto">
            <div className="flex space-x-4">
              <a
                href="#home"
                className={`text-black hover:bg-[#4e4e4e] hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#omdena"
                className={`text-black hover:bg-[#4e4e4e] hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
              >
                Background
              </a>
              <a
                href="#about-us"
                className={`text-black hover:bg-[#4e4e4e] hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
              >
                About Us
              </a>
              <a
                href="#projects"
                className={`text-black hover:bg-[#4e4e4e] hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
              >
                Our Projects
              </a>
              <a
                href="#contact-us"
                className={`text-black hover:bg-[#4e4e4e] hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 bg-white text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faBars}
                className={`h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                } transition-all`}
              />
              <FontAwesomeIcon
                icon={faBars}
                className={`h-6 w-6 ${
                  isMobileMenuOpen ? "block" : "hidden"
                } transition-all`}
              />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#home"
              className={`text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#about-us"
              className={`text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
            >
              About Us
            </a>
            <a
              href="#projects"
              className={`text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
            >
              Our Projects
            </a>
            <a
              href="#contact-us"
              className={`text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all`}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
