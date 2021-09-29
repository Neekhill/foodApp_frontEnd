import React from 'react'
import HowItWorksCard from './HowItWorksCard'
import Scooter from '../assets/Scooter.svg'
import meal from '../assets/meal.svg'
import eat from '../assets/eat.svg'
const HowItWorksData = [
    {
        img: meal,
        title: "Choose Your Favorite",
        des: "choose your favorite meal and order online.it's easy to customize your order"
    },
    {
        img: Scooter,
        title: "We Deliver Your Meals",
        des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        img: eat,
        title: "Eat and Enjoy",
        des: "No shopping, no cooking, no counting, and no cleaning.Enjoy your favorite with your family"
    }
]

function HowItWorks() {
    return (
        <>
            <div className="py-24 px-5 ">
                <div className=" text-gray-600 text-center font-semibold text-xl">
                    HOW IT WORKS
                </div>
                <div className="container mx-auto my-10 ">
                    <div className=" grid grid-cols-1 justify-items-center gap-x-2 gap-y-4 sm:grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8  text-center">
                        {
                            HowItWorksData.map((data, index) => {
                                return <HowItWorksCard key={index} image={data.img} title={data.title} des={data.des} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks
