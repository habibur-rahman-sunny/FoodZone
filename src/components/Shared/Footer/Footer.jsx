import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001D3D] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-gray-600 pb-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold">
                F
              </div>

              <h2 className="text-2xl font-bold">
                FoodZone
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              FoodZone brings delicious and quality meals to your doorstep.
              Explore fresh dishes, tasty burgers, beverages and traditional
              foods with easy ordering.
            </p>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <p className="flex gap-3 items-center">
                <FaLocationDot className="text-orange-400"/>
                Cumilla, Bangladesh
              </p>

              <p className="flex gap-3 items-center">
                <FaPhone className="text-orange-400"/>
                +880 1234-567890
              </p>

              <p className="flex gap-3 items-center">
                <FaEnvelope className="text-orange-400"/>
                support@foodzone.com
              </p>

            </div>
          </div>


          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Information
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-orange-400 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-orange-400 cursor-pointer">
                Privacy Policy
              </li>

            </ul>
          </div>


          {/* Social Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-300 mb-5">
              Stay connected with us for latest offers and updates.
            </p>

            <div className="flex gap-4">

              <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
                <FaXTwitter/>
              </a>

              <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
                <FaLinkedinIn/>
              </a>

              <a className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
                <FaFacebookF/>
              </a>

            </div>

          </div>

        </div>


        {/* Copyright */}
        <div className="text-center pt-8 text-gray-300">
          <p>
            © 2026 FoodHub. All rights reserved.
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;