import React, { useState } from 'react';
import MenuCardBtn from './MenuCardBtn';
import biryani from '../assets/biryani.jpg'
function OrderCard() {

    return (<>
        <div className=" max-w-sm bg-white text-gray-300 shadow-lg rounded-lg overflow-hidden sm:flex hover:shadow-xl  sm:max-h-32 sm:max-w-4xl ">

            <div className="sm:w-1/3">
                <img src={biryani} alt="chicken dish" className="object-cover h-48 sm:h-full w-full "></img>
            </div>

            <div className=" p-4 sm:w-2/3 sm:px-3 sm:py-1  ">
                <div>
                    <h3 className="text-gray-400 text-lg sm:text-sm">Order Id: 12345</h3>
                </div>
                <div className="my-2 sm:leading-none">
                    <h3 className="font-semibold text-2xl text-gray-500">Restaurant Name</h3>
                    <h4 className="text-xl text-gray-500">Chicken Lababdaar</h4>
                </div>

                <span className=" text-gray-500 font-semibold text-lg sm:text-sm sm:font-medium">Rs. 500</span>
            </div>


        </div>


    </>
    )
}

export default OrderCard
