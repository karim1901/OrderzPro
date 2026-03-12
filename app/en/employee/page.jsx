'use client'
import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'
import useIsPWA from '../_components/IsPwa';
import MenuFooter from '../_components/menuFooter';
import Loading from '@/app/loading';

import Link from 'next/link';
import { BiSolidEdit } from "react-icons/bi";
import { useUser } from '@/app/_context/userContext';
import { useRouter } from 'next/navigation';

const page = () => {
    const isPWA = useIsPWA();
    const router = useRouter()
    const { loading, veriryTokenGetUser, user, employees } = useUser()




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
                <div className='px-4 pb-4  select-none'>
                    <h1 className='text-[1.3rem] text-white font-semibold'>Welcome {user.fullname} </h1>
                </div>

                <Link href={"/en/employee/add"}>
                    <div className='px-4 pb-4'>
                        <button className='w-full h-[2.5rem]  text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Add Employee</button>
                    </div>
                </Link>

                <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-330px)]"} px-4 pb-4 overflow-y-scroll `}>

                    <div className='flex flex-col gap-4'>

                        {
                            employees?.map(employee =>{
                                return <div className='w-full p-4 h-[100px] glass2 backdrop-blur-xl rounded-xl flex ' onClick={()=>{router.push(`/en/employee/${"sdbcjhdscs7832723"}`)}}>
                                <div className=''>
                                    <img src={`/icons/${ employee.gender == "male" ? "icon2.png" : "iconGirl.png"}`} alt="" className='w-[4rem]' />
                                </div>
                                <div className='w-full '>
                                    <div className='w-full h-[30px] px-2 flex justify-between items-center text-[1.2rem]'>
                                        <p className='font-semibold text-gray-300'>{employee.fullname}</p>
                                        <BiSolidEdit className='text-gray-300 mr-2' />
                                    </div>
    
                                    <div className='h-[40px] flex px-2 '>
                                        <div className=' w-full '>
                                            <div className='text-[.8rem] text-white'>
                                                <p>UserName : {employee.username}</p>
                                                <p>Password : Krmkr023982</p>
                                            </div>
                                        </div>
                                        <div className='  '>
                                            <div className='p-2 rounded-xl bg-green-500/30'>✅</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
                        }

                        

                    </div>

                </div>

                <MenuFooter />


            </div>
    )
}

export default page
