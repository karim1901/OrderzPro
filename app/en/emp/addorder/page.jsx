'use client'
import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'
import useIsPWA from '../../_components/IsPwa';
import Loading from '@/app/loading';
import axios from 'axios';
import { useUser } from '@/app/_context/userContext';
import MenuFooterEmployee from '../../_components/menuFooterEmployee';

const page = () => {
    const isPWA = useIsPWA();


    const { loading, veriryTokenGetUser, user } = useUser()



    useEffect(() => { veriryTokenGetUser() }, [])


    return (
        !loading ?
            <Loading />

            :

            <div className={`bgHomeMobile relative max-h-screen overflow-hidden ${!loading && "hidden"} `}>
                <div>
                    <div className="p-4 flex justify-between items-center select-none ">
                        <img src="/logo/logo.png" alt="" className="w-[13rem]" />
                        <IoIosNotifications className='text-[1.8rem] bg-[#ffffff0f] text-[#d6d6e694] border-[.5px] border-white rounded-full ' />
                    </div>
                </div>
                <div className='px-4 pb-4 select-none'>
                    <h1 className='text-[1.3rem] text-white font-semibold'>Welcome Ossama </h1>
                </div>


                <div className='px-4 flex flex-col gap-4'>
                    <h1 className='text-white font-semibold'>Add Order</h1>

                    <input type="text" placeholder='Full name' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />
                    <input type="text" placeholder='Phone' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />
                    <input type="text" placeholder='City' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />
                    <input type="text" placeholder='Name product' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />
                    <input type="text" placeholder='Quantity' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />
                    <input type="text" placeholder='Price' className='glass backdrop-blur-xl w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' />

                    <div className='pt-4'>
                        <button  className='w-full h-[2.5rem]  text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Create</button>
                    </div>

                </div>



                <MenuFooterEmployee />

            </div>
    )
}

export default page
