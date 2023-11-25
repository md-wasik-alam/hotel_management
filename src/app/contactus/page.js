import React from 'react';

const Page = () => {
    return (
        <div className='flex-col py-10 justify-center h-screen'>
            <h1 className='text-4xl text-center font-sans'>Contact Us</h1>
            <div className="flex justify-center">
                <div className="w-2/6 p-5 mt-5 shadow-lg rounded-lg">
                    <h4>Get In Touch!</h4>
                    <div className="flex mt-5  justify-between">
                        <input
                            type="text"
                            className='border w-56 rounded-md px-2 py-1'
                            placeholder='Name'
                        />
                        <input
                            type="text"
                            className='border w-56 rounded-md px-2 py-1'
                            placeholder='Phone No.'
                        />
                    </div>
                    <div className="flex mt-5  justify-between">
                        <input
                            type="text"
                            className='border w-56 rounded-md px-2 py-1'
                            placeholder='example@gmail.com'
                        />
                        <input
                            type="text"
                            className='border w-56 rounded-md px-2 py-1'
                            placeholder='Subject'
                        />
                    </div>
                    <div className="flex mt-5  justify-between">
                        <textarea name="" id="" cols="50" rows="4" className='rounded-md focus:border-0 border px-2 py-4'></textarea>
                    </div>
                    <button className='bg-orange-600 hover:bg-orange-800 text-white font-semibold text-center py-2 w-full mt-5 rounded-md'>Submit Now</button>
                </div>
                <div className="w-2/6 text-center px-5 rounded-lg mt-5 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56011.54847410518!2d77.2743792!3d28.6680481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc82c8e97a31%3A0x814a1c3a410f96f4!2sEast%20Azad%20Nagar!5e0!3m2!1sen!2sin!4v1700894593460!5m2!1sen!2sin" width="500" height="370" className='rounded-md shadow-md' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Page;
