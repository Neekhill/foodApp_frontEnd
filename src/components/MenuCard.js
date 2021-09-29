import React, { useState } from 'react';
import MenuCardBtn from './MenuCardBtn';
import biryani from '../assets/biryani.jpg'

function MenuCard() {
    const [counter, setCounter] = useState(0);
    const handleClick = (event) => {
        event.currentTarget.value === '+' ? setCounter(counter + 1) : setCounter(counter - 1)
    };
    return (
        <>
            <div className=" bg-white text-gray-300 shadow-md rounded-lg overflow-hidden sm:flex    hover:shadow-xl max-w-sm sm:max-w-3xl sm:max-h-28 ">
                <div className="sm:w-1/4 ">
                    <img src={biryani} alt="chicken dish" className="object-cover h-48 w-full sm:h-32"></img>
                </div>
                <div className=" flex flex-col justify-between p-3 sm:flex-row sm:w-3/4 sm:justify-between ">
                    <div>
                        <h3 className=" text-2xl text-gray-600 font-semibold">Chicken Lababdaar</h3>
                        <h4 className=" text-xl text-gray-500 font-medium ">Rs.1000 only</h4>
                    </div>
                    <div className="flex items-center">
                        <MenuCardBtn color="text-green-600" run={handleClick} value='+' />
                        <div className='p-5 text-gray-600 text-lg font-semibold'>{counter}</div>
                        <MenuCardBtn color="text-red-600" run={handleClick} value='-' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuCard
