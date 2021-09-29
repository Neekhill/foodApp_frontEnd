import React from 'react';

const SkeletonCard = () => {
    return (
        <div className=" bg-white rounded shadow-xl">

            <div className="h-48 w-80  bg-gray-200 rounded-tr rounded-tl animate-pulse">
                {/* image placeholder */}
            </div>

            <div className="p-5">
                <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4">
                    {/* title placeholder */}
                </div>

                {/* content placeholder */}
                <div className="grid grid-cols-4">
                    <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                    <div className=" col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className=" col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                    <div className=" col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>


                </div>
            </div>

        </div>
    );
};

export default SkeletonCard;