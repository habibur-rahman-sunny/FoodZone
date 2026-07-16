import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001D3D] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-8">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
              H
            </div>

            <h2 className="text-xl font-bold tracking-wide">
              HERO.IO
            </h2>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium mb-4">
              Social Links
            </h3>

            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 text-gray-300">
          <p>Copyright © 2026 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;