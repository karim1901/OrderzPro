'use client'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import MenuFooter from './en/_components/menuFooter'

const Loading = () => {
    return (
        <div className='bgHomeMobile h-screen w-full  fixed'>
            <div>
                <div className="p-4 flex justify-between items-center select-none ">
                    <img src="/logo/logo.png" alt="" className="w-[13rem]" />
                    <IoIosNotifications className='text-[1.8rem] bg-[#ffffff0f] text-[#d6d6e694] border-[.5px] border-white rounded-full ' />
                </div>
            </div>
            <div className=' flex fixed top-0 left-0  justify-center items-center h-full w-full '>
                <span className="loader"></span>
            </div>
            

            <MenuFooter/>
        </div>
    )
}

export default Loading
