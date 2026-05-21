import React from 'react';

const ServiceInfo = () => {
    return (
        <div className='bg-[#0a9396]/10 border-t-2 border-b-2 border-[#005f73]/50 my-10 p-5 md:p-10 px-5 lg:px-0'>
            <div className='max-w-7xl mx-auto bg-[#005f73]/30 text-[#0a9396] rounded-lg flex justify-center flex-wrap'>
                <div className='text-center p-5 md:p-10'>
                    <p className='md:text-3xl lg:text-5xl font-bold'>500+</p>
                    <p className='text-xs lg:text-2xl font-semibold'>Expert Doctors</p>
                </div>
                <div className='text-center p-5 md:p-10'>
                    <p className='md:text-3xl lg:text-5xl font-bold'>50,000+</p>
                    <p className='text-xs lg:text-2xl font-semibold'>Patients Served</p>
                </div>
                <div className='text-center p-5 md:p-10'>
                    <p className='md:text-3xl lg:text-5xl font-bold'>98%</p>
                    <p className='text-xs lg:text-2xl font-semibold'>Satisfaction Rate</p>
                </div>
                <div className='text-center p-5 md:p-10'>
                    <p className='md:text-3xl lg:text-5xl font-bold'>15+</p>
                    <p className='text-xs lg:text-2xl font-semibold'>Specialties</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;