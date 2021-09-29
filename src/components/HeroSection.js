import React from 'react'
import heroSectionImage from '../assets/heroSectionImage.svg'
import heroDelivery from '../assets/heroDelivery.svg'
import HeroSearch from './HeroSearch'
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <>
            <div className="text-center bg-white text-gray-600 pt-5 px-2 sm:flex sm:flex-row sm:justify-around sm:justify-items-center  sm:text-left md:pt-10  h-full">
                <div className="sm:w-2/3">
                    <img src={heroDelivery} className=" w-56 mx-auto sm:w-full" style={{ height: '88%' }} />
                </div>
                <div className="sm:w-1/3">
                    <div className="pt-10 sm:pt-5 sm:px-3 sm:flex sm:flex-col sm:justify-center lg:mt-10 ">
                        <div className=" text-xl mb-1 font-bold sm:text-2xl md:text-3xl lg:text-5xl font-serif" >FAST, FRESH, INSTANT</div>
                        <div className="text-md font-medium sm:text-lg lg:text-xl">You select, We Deliver</div>
                    </div>
                    <Link to="/explore"> <button className=" px-3 py-2 text-lg font-medium sm:text-xl lg:text-2xl mt-6 sm:mt-5">Explore Restaurants</button></Link>
                </div>



            </div>


        </>
    )
}

export default HeroSection
