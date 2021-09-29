import React from 'react';
import { FaSearch } from 'react-icons/fa';

function HeroSearch() {
    return (
        <>
            <div className="flex justify-center mt-16 mb-20">
                <div className="flex justify-items-center">
                    <input type=" text" placeholder="Enter delivery address"
                        className="w-64 outline-none border-gray-200 border-2 px-5 py-3 sm:w-96 "
                    ></input>

                    <button className=" text-white font-semibold px-3 py-2 " style={{ backgroundColor: "#fc8019", hover: { backgroundColor: "#f58122" } }}>
                        <FaSearch size="24" /></button>
                </div>
            </div>
        </>


    )
}

export default HeroSearch
