'use client'
import React from 'react'
import MenuFooter from '../_components/menuFooter'
import { IoIosNotifications } from 'react-icons/io'
import useIsPWA from '../_components/IsPwa'
import { BiSolidEdit } from "react-icons/bi";

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

            <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-290px)]"} p-4 overflow-y-scroll `}>

                <div className='flex flex-col gap-4'>
                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/icon2.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : karim_kr</p>
                                        <p>Password : Krmkr023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-green-500/30'>✅</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/iconGirl.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : ibtissam_aa</p>
                                        <p>Password : bits023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-green-500/30'>✅</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/icon2.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : karim_kr</p>
                                        <p>Password : Krmkr023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-red-500/30'>❌</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/iconGirl.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : ibtissam_aa</p>
                                        <p>Password : bits023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-green-500/30'>✅</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/icon2.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : karim_kr</p>
                                        <p>Password : Krmkr023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-red-500/30'>❌</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-4 h-[100px] glass rounded-xl flex '>
                        <div className=''>
                            <img src="/icons/iconGirl.png" alt="" className='w-[4rem]' />
                        </div>
                        <div className='w-full '>
                            <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                <p className='font-semibold text-gray-300'>Ibtissam</p>
                                <BiSolidEdit className='text-gray-300 mr-2' />
                            </div>

                            <div className='h-[40px] flex px-2 '>
                                <div className=' w-full '>
                                    <div className='text-[.8rem] text-white'>
                                        <p>UserName : ibtissam_aa</p>
                                        <p>Password : bits023982</p>
                                    </div>
                                </div>
                                <div className='  '>
                                    <div className='p-2 rounded-xl bg-green-500/30'>✅</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>





            <MenuFooter />


        </div>
    )
}

export default page
