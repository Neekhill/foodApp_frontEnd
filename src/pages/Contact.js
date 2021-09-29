import React from 'react';
import HeroSection from '../components/HeroSection';

const Contact = () => {
    return (
        <>
            <HeroSection />
            <div className="flex justify-center items-center ">
                <div className="bg-gray-300 p-16 mt-16 mb-20 text-gray-700 text-4xl sm:p-24 
            sm:text-6xl md:p-30 md:text-8xl">Contact Page</div>
            </div>
        </>
    );
};

export default Contact;