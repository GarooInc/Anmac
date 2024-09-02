import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div>
          <img src="/assets/images/logowhite.png" alt="ANMAC" className="w-40" />
          <p className="text-sm">
          Somos un equipo apasionado y dedicado en el campo de la medicina, comprometido en proporcionar atención médica de alta calidad a nuestra comunidad.
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

        {/* Contact Us */}
        <div>
          <h3 className="text-blue_anmac font-bold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5" />
              <a href='mailto:Admin@anmac.gt'>Admin@anmac.gt</a>
            </li>
            <li className="flex items-center space-x-2">
                <FaPhone className="w-5 h-5" />
              <span>03045346346</span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-blue_anmac font-bold mb-4">Suscríbete a nuestro Newsletter</h3>
          <p className="text-sm mb-4">Explora recursos adicionales sobre la industria</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l-full w-full text-black"
            />
            <button
              type="submit"
              className="bg-blue_anmac text-white p-2 rounded-r-full"
            >
              Suscribir
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
