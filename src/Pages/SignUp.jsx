import React from 'react';

const SignUp = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900 to-pink-700 text-white px-6 py-4 text-xl font-semibold">
                Register As Donor
            </div>

            {/* Form */}
            <form className="p-8 space-y-6 text-sm md:text-base">
                <div className="">
                    <div className='flex  items-center'>
                        <label className="flex-1/2">Full Name</label>
                        <div className="flex w-full items-center gap-2">
                            <input type="text" placeholder="First" className="input border-2 px-4 py-2 rounded-xl border-gray-300 outline-0" />
                            <input type="text" placeholder="Last Name" className="input border-2 px-4 py-2 rounded-xl border-gray-300 outline-0" />
                        </div>
                    </div>

                    <div className='flex'>
                        <label className="w-1/4">Phone Number</label>
                        <input type="text" placeholder="Number" className="input w-full " />
                    </div>

                    <div>
                        <label className="block mb-1">E-mail</label>
                        <input type="email" placeholder="Mail ID" className="input w-full" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1">Address</label>
                        <textarea rows="3" placeholder="Type Here" className="textarea w-full resize-none"></textarea>
                    </div>

                    <div>
                        <label className="block mb-1">Age</label>
                        <input type="number" placeholder="Age" className="input w-full" />
                    </div>

                    <div>
                        <label className="block mb-1">Blood Group</label>
                        <select className="select w-full">
                            <option>Select</option>
                            <option>A+</option>
                            <option>O+</option>
                            <option>B+</option>
                            <option>AB+</option>
                            <option>A-</option>
                            <option>O-</option>
                            <option>B-</option>
                            <option>AB-</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">District</label>
                        <select className="select w-full">
                            <option>Select District</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">State</label>
                        <input type="text" placeholder="State" className="input w-full" />
                    </div>

                    <div>
                        <label className="block mb-1">PinCode</label>
                        <input type="text" placeholder="Pincode" className="input w-full" />
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label className="block mb-1">Last Donation</label>
                            <input type="text" placeholder="Month" className="input w-full" />
                        </div>
                        <div className="mt-6">
                            <input type="text" placeholder="Year" className="input w-full" />
                        </div>
                    </div>
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button type="submit" className="btn bg-black text-white rounded-lg px-6 py-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;