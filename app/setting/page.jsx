'use client'
import React from 'react'
import useIsPWA from '../_components/IsPwa';
import { IoIosNotifications } from 'react-icons/io';
import MenuFooter from '../_components/menuFooter';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";


const page = () => {
    const isPWA = useIsPWA();
    return (
        <div className='bgHomeMobile relative max-h-screen overflow-hidden  '>
            <div>
                <div className="p-4 flex justify-between items-center select-none ">
                    <img src="/logo/logo.png" alt="" className="w-[13rem]" />
                    <IoIosNotifications className='text-[1.8rem] bg-[#ffffff0f] text-[#d6d6e694] border-[.5px] border-white rounded-full ' />
                </div>
            </div>
            <div className='px-4 pb-4 select-none'>
                <h1 className='text-[1.3rem] text-white font-semibold'>Welcome Ossama </h1>
            </div>



            <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-290px)]"}  overflow-y-scroll `}>

                <div className="px-4 flex flex-col gap-4 ">
                    <ul className=' text-white mt-11 flex flex-col gap-1 '>
                        <Link href={"/setting/payment"}><li className='glass px-4 py-2 rounded-md hover:bg-orange-400'>Payment</li></Link>
                        <Link href={"/setting/contact"}><li className='glass px-4 py-2 rounded-md hover:bg-orange-400'>Contact</li></Link>
                        <Link href={"/setting/Language"}><li className='glass px-4 py-2 rounded-md hover:bg-orange-400'>Language</li></Link>
                        <Link href={"/setting/Language"}><li className=' px-4 py-2 rounded-md flex items-center gap-2 hover:bg-white hover:text-green-500 text-white bg-green-500'>
                            WhatsApp
                            <FaWhatsapp/>
                        </li></Link>
                        <Link href={"/setting/logout"}><li className='glass px-4 py-2 rounded-md hover:bg-orange-400'>Log out</li></Link>
                    </ul>
                </div>
            </div>



            setting

            <MenuFooter />
        </div>
    )
}

export default page
