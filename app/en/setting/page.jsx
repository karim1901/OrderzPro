'use client'
import React, { useEffect, useState } from 'react'
import useIsPWA from '../_components/IsPwa';
import { IoIosNotifications } from 'react-icons/io';
import MenuFooter from '../_components/menuFooter';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import Loading from '@/app/loading';


const page = () => {
    const isPWA = useIsPWA();
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()
    const router = useRouter()


    const logout = async () => {

        try {

            const res = await axios.post("/api/logout")

            toast.success(res.data.message)

            localStorage.removeItem("user");

            router.push("login");

        } catch (error) {
            toast.error("logout error")
            console.log("error logout ", error.message)
        }

    };


    useEffect(() => { veriryTokenGetUser() }, [])


    const veriryTokenGetUser = async () => {

        const path = pathname.split("/")[2]


        try {

            const res = await axios.get("/api/me")

            console.log("data user", res.data)
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setLoading(true)


        } catch (error) {


            localStorage.removeItem("user")

            if (path == "dashboard" || path == "employee" || path == "orders" || path == "setting") {
                router.push("login")
            }

            console.log("verify token error", error.message)
        }


    }



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



                <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-290px)]"}  overflow-y-scroll `}>

                    <div className="px-4 flex flex-col gap-4 ">
                        <ul className=' text-white mt-11 flex flex-col gap-1 '>
                            <Link href={"setting/Acount"}><li className='glass backdrop-blur-xl px-4 py-2 rounded-md hover:bg-orange-400'>My Acounte</li></Link>
                            <Link href={"setting/payment"}><li className='glass backdrop-blur-xl px-4 py-2 rounded-md hover:bg-orange-400'>Payment</li></Link>
                            <Link href={"setting/contact"}><li className='glass backdrop-blur-xl px-4 py-2 rounded-md hover:bg-orange-400'>Contact</li></Link>
                            <Link href={"setting/Language"}><li className='glass backdrop-blur-xl px-4 py-2 rounded-md hover:bg-orange-400'>Language</li></Link>
                            <Link href={"setting/Language"}><li className=' px-4 py-2 rounded-md flex items-center gap-2 hover:bg-white hover:text-green-500 text-white bg-green-500'>
                                WhatsApp
                                <FaWhatsapp />
                            </li></Link>
                            <li className='glass px-4 py-2 rounded-md hover:bg-orange-400' onClick={logout}>Log out</li>
                        </ul>
                    </div>
                </div>



                setting

                <MenuFooter />
            </div>
    )
}

export default page
