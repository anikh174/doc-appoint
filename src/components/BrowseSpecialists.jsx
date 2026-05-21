import Image from 'next/image';
import React from 'react';

const BrowseSpecialists = () => {
    return (
        <div  className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
            <div className='space-y-3 text-center'>
                <p className='text-2xl text-[#0a9396]'>Browse by</p>
                <h3 className='text-4xl text-[#005f73]'>Medical Specialties</h3>
            </div>

            <div className='mt-8 grid grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-10'>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://st.depositphotos.com/57803962/56899/v/450/depositphotos_568992318-stock-illustration-human-heart-anatomy-icon-flat.jpg'} alt='Cardiology' height={50} width={50} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Cardiology</p>
                </div>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://cdn.creativefabrica.com/2021/06/15/Neurology-Icon-Graphics-13449143-1-1-580x385.jpg'} alt='Neurology' height={70} width={70} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Neurology</p>
                </div>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4jhG5nRFmFoFoBNTw34RLn8HOYOyscyQqw&s'} alt='tooth' height={50} width={50} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Dentistry</p>
                </div>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://www.shutterstock.com/image-vector/ophthalmology-icon-ophthalmologist-vector-isolated-600nw-2356898781.jpg'} alt='Ophthalmology' height={50} width={50} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Ophthalmo...</p>
                </div>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://thumbs.dreamstime.com/b/ortho-icon-isolated-white-background-your-web-mobile-app-design-ortho-icon-isolated-white-background-133860885.jpg'} alt='Orthopedics' height={50} width={50} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Orthopedics</p>
                </div>
                <div className='space-y-3 p-5 border-3 border-[#0a9396] rounded-xl transition-all duration-300 hover:scale-105'>
                    <Image src={'https://thumbs.dreamstime.com/b/lungs-anatomy-logo-clinic-respiratory-system-transplantation-center-pulmonology-clinic-tuberculosis-pneumonia-asthma-205122802.jpg'} alt='Pulmonology' height={50} width={50} className='mx-auto'></Image>

                    <p className='text-center text-xs md:text-xl font-bold'>Pulmonolo...</p>
                </div>
            </div>
        </div>
    );
};

export default BrowseSpecialists;