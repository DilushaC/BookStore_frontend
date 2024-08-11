import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <div className="flex items-center text-2xl font-bold">
                <span className="text-black">BOOK</span>
                <span className="text-green-500 ml-1">ARC</span>
            </div>
            <div className="flex items-center space-x-6">
                <a href="#home" className="text-black hover:text-green-500">Home</a>
                <a href="#shop" className="text-black hover:text-green-500 relative">
                    Shop
                    <span className="absolute right-[-10px] top-[-5px] text-green-500 text-lg">•</span>
                </a>
                <a href="#about" className="text-black hover:text-green-500">About</a>
                <a href="#contact" className="text-black hover:text-green-500">Contact</a>
                <a href="#search" className="text-xl">&#128269;</a>
                <a href="#cart" className="text-xl">&#128722;</a>
                <a href="#signin" className="px-4 py-2 bg-gray-200 rounded-md text-black font-bold">Sign In</a>
                <a href="#register" className="px-4 py-2 bg-green-500 rounded-md text-white font-bold">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;
