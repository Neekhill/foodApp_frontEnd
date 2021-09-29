import React from 'react'
import spice_spoons from '../assets/spice_spoons.jpg'
function RestaurantHeader() {
    return (
        <div className="flex bg-gray-900 px-16 py-10 text-white">
            <div>
                <img src={spice_spoons} alt="restaurant name" className="object-cover h-48 w-64" />
            </div>

            <div className=" px-10">
                <h4 className="text-3xl font-medium mb-3">Restaurant name</h4>
                <div className="text-gray-400 mb-2">indian, continental, chinese</div>
                <div className="text-gray-400 mb-2">saket, new delhi</div>
                <div className="flex justify-center py-5 text-gray-400">
                    <div className="border-r border-gray-500 pr-4">
                        <div className="text-white text-md font-medium ">4.1 stars</div>
                        <div>500+ Ratings</div>
                    </div>
                    <div className="pl-5 border-r border-gray-500 pr-4">
                        <div className="text-white text-md font-medium ">50 mins</div>
                        <div>delivery time</div>
                    </div>
                    <div className="pl-5">
                        <div className="text-white text-md font-medium">Rs.500</div>
                        <div>cost for two</div>
                    </div>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}

export default RestaurantHeader
