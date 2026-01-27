import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {/* Logo */}
      <div className="flex justify-between flex-wrap md:flex-nowrap p-3 border-b border-gray-300">
        <Link
          to="/"
          className="flex flex-col items-center text-gray-700 hover:text-gray-900"
        >
          <FaHome />
          <span className="font-bold">Bodega</span>
        </Link>

        {/* Botón menú hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu */}
        <ul
         className={`
    w-full
    md:flex md:w-auto
    ${isOpen ? "block" : "hidden"}
  
      `}
        >
          <li>
            <Link to="/" className="block p-3">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-3">
              Bodegas
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-3">
              Inventario
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-3">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
