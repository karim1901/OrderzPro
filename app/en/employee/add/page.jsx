'use client'
import useIsPWA from '@/app/en/_components/IsPwa'
import MenuFooter from '@/app/en/_components/menuFooter'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'

const page = () => {
    const isPWA = useIsPWA()

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

                <div className="mx-4 rounded-lg h-[35rem] ">

                    <h1 className='text-center text-white font-semibold py-4'>Add Employee</h1>

                    <div className='flex flex-col gap-4'>
                        <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='Full Name' />
                        <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='User Name' />
                        <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='Password' />

                        <div className='flex justify-center gap-11 '>


                            <div className='flex gap-2'>
                                <p className='font-semibold text-white'>male</p>
                                <input type="radio" name='gender' />
                            </div>

                            <div className='flex gap-2'>
                                <p className='font-semibold text-white'>Fimale</p>
                                <input type="radio" name='gender' />
                            </div>

                        </div>
                    </div>


                    <div className='pt-4'>
                        <button className='w-full h-[2.5rem]  text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Create</button>
                    </div>

                </div>
            </div>

            <MenuFooter />

        </div>
    )
}

export default page
