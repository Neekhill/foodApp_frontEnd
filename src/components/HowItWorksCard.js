import React from 'react'

function HowItWorksCard({ image, title, des }) {
    return (
        <div className="p-4">
            <div className="flex justify-center">
                <div>
                    <img src={image} alt={title} className="object-cover h-20 w-20 text-gray-600 mb-3" />
                </div>
            </div>

            <div className="px-10">
                <div className="mb-3 text-gray-600 font-semibold">{title}</div>
                <div className=" text-gray-500 font-medium text-xs">{des}</div>
            </div>
        </div>
    )
}

export default HowItWorksCard
