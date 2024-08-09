import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo y Descripción */}
        <div>
          <img src="/assets/images/logowhite.png" alt="ANMAC" className="w-40" />
          <p className="text-sm">
            Somos uma equipe apaixonada e dedicada no campo da medicina comprometida em fornecer cuidados de saúde de alta qualidade à nossa comunidade.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-blue_anmac" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-blue_anmac" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-blue_anmac" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue_anmac font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Medicines</a></li>
            <li><a href="#" className="hover:underline">Impact</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-blue_anmac font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5" />
              <span>anmac@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaPhone className="w-5 h-5" />
              <span>03045346346</span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-blue_anmac font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">Explore additional Medicine and resources</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address..."
              className="p-2 rounded-l-full w-full text-black"
            />
            <button
              type="submit"
              className="bg-blue_anmac text-white p-2 rounded-r-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © 2024 Anmac, Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
