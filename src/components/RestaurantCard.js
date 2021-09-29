import { Link } from 'react-router-dom';

const RestaurantCard = ({ title, image }) => {
    return (
        <div className="bg-white text-gray-300 overflow-hidden max-w-xs rounded-lg hover:shadow-lg hover: border-gray-200 hover:border-2 ">
            <div>
                <div>
                    <img src={image} alt="chicken dish" className="object-cover h-48 w-full " />
                </div>
            </div>
            <div className="px-4 mt-2 text-gray-600">
                <h3 className="font-extrabold text-xl text-gray-500">{title}</h3>
                <p className="text-sm my-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <hr />
                <div className="text-xs tracking-tight my-2">
                    <span className="bg-green-200 rounded-full mr-2 px-3">Rs.200 for two</span>
                    <span className="bg-red-300 rounded-full mx-2 px-3"> 25% off </span>
                    <span className="bg-yellow-300 rounded-full mx-2 px-3">3 start</span>
                </div>
                <Link to="/menu/:id" ><button className=" px-4 py-2 my-4 text-gray-600  focus:outline-non hover:border-2 " >Read more</button ></Link>
            </div>
        </div>
    );
};

export default RestaurantCard;