import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import RestaurantHeader from "./RestaurantHeader";

function Menu() {
    let { id } = useParams();
    return (
        <div>
            <RestaurantHeader />
            <h3 className="text-5xl text-center font Bold mt-10">My restaurant ID: {id}</h3>
            <div className="container mx-auto mt-10 mb-10">
                <div className=" justify-items-center grid grid-cols-1 gap-y-4 sm:grid-cols-1 gap-y-8 md:grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-4 gap-y-8 " >
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
                <div className="h-16"></div>
                <div className="flex justify-center bg-white w-full p-3 mt-3 mr-4 items-baseline fixed inset-x-0 bottom-0">
                    <div>
                        <span className="text-lg  text-gray-600 font-medium px-4">Subtotal: Rs.1000</span>
                        <button className="bg-red-700 text-xl text-gray-100 px-3 py-2 sm:px-5 sm:py-3 rounded focus:outline-none">Buy Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu
