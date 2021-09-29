import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../api/restaurantsApi';
import RestaurantCard from './RestaurantCard';
import SkeletonCard from './SkeletonCard';

function RestaurantList() {
    const AvailableStates = {
        NEW: 'NEW',
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS'
    };

    const [restaurantListState, setRestaurantListState] = useState(AvailableStates.NEW)
    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        setRestaurantListState(AvailableStates.LOADING)
        getRestaurants()
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    setRestaurantListState(AvailableStates.SUCCESS);
                    setRestaurants(response.data.hits);
                }
                else {
                    console.log(`Error occurred ${response.status}`);
                    setRestaurantListState(AvailableStates.ERROR);
                }
            })
            .catch(error => {
                console.log(error);
                setRestaurantListState(AvailableStates.ERROR);
            });
    }, [])


    return (
        <>
            {/* <h1 className=" p-3 text-4xl text-gray-600 font-semibold text-center bg-gray-200"> Chicken Dishes</h1> */}

            <div className="container mx-auto my-10 ">
                <div className=" grid grid-cols-1 justify-items-center gap-x-2 gap-y-4 sm:grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8 ">

                    {(restaurantListState === "NEW" || restaurantListState === "LOADING") ?
                        <>
                            <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
                        </> :
                        (restaurantListState === "Error") ?
                            <><div> Error occurred </div></> :
                            <>
                                {
                                    restaurants.map((restaurant, index) => {
                                        return <RestaurantCard key={index}
                                            title={restaurant.recipe.label}
                                            image={restaurant.recipe.image}
                                        />
                                    })
                                }
                            </>
                    }

                </div>
            </div>
        </>
    );
}

export default RestaurantList
