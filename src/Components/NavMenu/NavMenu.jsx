import React, { useState } from 'react';
import { FaBars, FaTimes, FaTint } from "react-icons/fa";
import { NavLink } from 'react-router';

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
            <div className="flex justify-between items-center">
                {/* Left: Logo + Links */}
                <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full shadow p-2">
                        <FaTint className="text-red-600 text-xl" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6 font-semibold">
                        <NavLink to="/" className="text-black hover:text-red-600">Home</NavLink>
                        <NavLink to="/about" className="hover:text-red-600">About Us</NavLink>
                        <NavLink to="/find-blood" className="hover:text-red-600">Find Blood</NavLink>
                        <NavLink to="/register" className="hover:text-red-600">Register Now</NavLink>
                    </nav>
                </div>

                {/* Right: Login + Hamburger */}
                <div className="flex items-center space-x-4">
                    <button className="btn border border-gray-300 rounded-xl hover:bg-gray-100 hidden md:inline-block">
                        Log In
                    </button>
                    {/* Mobile Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mt-4 md:hidden flex flex-col space-y-4 font-semibold">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Home</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600">About Us</NavLink>
                    <NavLink to="/find-blood" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Find Blood</NavLink>
                    <NavLink to="/register" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Register Now</NavLink>
                    <button className="btn border border-gray-300 rounded-xl hover:bg-gray-100 w-full">
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavMenu;