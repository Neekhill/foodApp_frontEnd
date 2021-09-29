import React from 'react';
import form_reg from '../assets/form_reg.jpg'
const Login = () => {
    return (
        <>

            <div className=" flex container mx-auto my-16 justify-center font-sans ">
                <div className=" sm:flex rounded-lg overflow-hidden shadow">
                    {/* image */}
                    <div className="max-w-lg sm:w-1/2 sm:max-w-xl ">
                        <img src={form_reg} className="object-cover h-40 w-full sm:h-96 sm:w-full " />
                    </div>
                    {/* login form */}
                    <div className="max-w-2xl sm:w-1/2 sm:max-w-xl">
                        <form className="bg-gray-100 p-4 sm:px-10 sm:py-16 h-full ">
                            <div>
                                <label className="text-lg  text-gray-700 font-medium  mb-1">Username</label>
                                <input type="input" placeholder="Enter your Username" className="block text-md text-white bg-gray-700 px-4 py-3 rounded-lg w-full focus:outline-none " />
                            </div>
                            <div className="mt-4">
                                <label className="text-lg text-gray-700 font-medium mb-1">Password</label>
                                <input type="password" placeholder="Enter your password" className="block text-md  text-white bg-gray-700 px-4 py-3 rounded-lg w-full focus:outline-none " />
                            </div>
                            <div className="mt-8">
                                <button className="px-5 py-2 rounded-lg bg-pink-500 text-white font-semibold text-center w-full">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
/*
mt-20 w-2/3 p-32 bg-gray-200 text-6xl text-center */