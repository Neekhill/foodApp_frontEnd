import React from 'react';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SwiggyNew from '../assets/SwiggyNew.png'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(0);

    const handleClick = () => { setShowMenu(!showMenu); }
    return (
        <nav className="sticky top-0 z-50">
            <div className="hidden md:block">
                <div className="flex justify-between items-center bg-white text-gray-600  shadow-lg">
                    <div className="flex items-center ml-5">
                        <div>
                            <Link to="/"><img src={SwiggyNew} className="h-20 w-20 " /></Link>
                        </div>
                        <div>
                            <Link to="/" className="px-4 py-2 hover:border-pink-500 hover:bo">Home</Link>
                            {/*   <Link to="/about" className="px-4 py-2" >Aboutus</Link>
                            <Link to="/contact" className="px-4 py-2">Contact us</Link> */}
                            <Link to="/explore" className="px-4 py-2">Explore</Link>
                        </div>
                    </div>
                    <div className="mr-5">
                        <Link to="/orders" className="px-4 py-2">My Orders</Link>
                        <Link to="/login" className="px-4 py-2">Login</Link>
                        <Link to="/signup" className="px-4 py-2">Sign up</Link>
                    </div>
                </div>
            </div>

            {/* for  small screen  */}
            <div className="block md:hidden">
                <div className="flex justify-between items-center bg-white text-gray-600  shadow-lg">
                    <div>
                        <Link to="/"><img src={SwiggyNew} className="h-24 w-24 " /></Link>
                    </div>
                    <div className="mr-6">
                        <button className="p-2 " onClick={handleClick}> <FaBars size="20" /> </button>
                    </div>
                </div>
                <div className={showMenu ? "block" : "hidden"} >
                    <div className="flex flex-col text-xl text-gray-600 text-center bg-gray-100">
                        <Link to="/" className="p-3 hover:bg-gray-200">Home</Link>
                        {/*  <Link to="/about" className="p-3 hover:bg-gray-200" >Aboutus</Link>
                        <Link to="/contact" className="p-3 hover:bg-gray-200">Contact us</Link> */}
                        <Link to="/explore" className="p-3 hover:bg-gray-200">Explore</Link>
                        <Link to="/Orders" className="p-3 hover:bg-gray-200">My Orders</Link>
                        <Link to="/login" className="p-3 hover:bg-gray-200">Login</Link>
                        <Link to="/signup" className="p-3 hover:bg-gray-200">Sign up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;