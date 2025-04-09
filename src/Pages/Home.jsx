import React from 'react';

import Bg from "../assets/hero-bg.png"

const Home = () => {
    return (
        <div>



            {/* Hero Section */}
            <div className="  bg-center  shadow-md rounded-2xl bg-blend-soft-light   h-[700px] w-full bg-no-repeat "
                style={{
                    backgroundImage: `url(${Bg})`,
                }}
            >
                <div className='flex items-center justify-center h-full'>
                    <div className=" ml-30  p-10    w-1/2 ">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Save Lives, Donate Blood
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">
                            Every drop of blood you donate can be a lifeline for someone in need.
                            Join our mission to create a healthier, stronger community. Donating
                            blood is simple, safe, and it saves lives—be the reason someone lives today.
                        </p>
                        <div className='flex '>
                            <button className="btn  text-white bg-black py-4 px-5 text-2xl rounded-lg font-semibold">Become a Donor</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;