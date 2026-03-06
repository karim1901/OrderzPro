'use client'
import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'


import Loading from '@/app/loading';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import MenuFooter from '../../_components/menuFooter';
import useIsPWA from '../../_components/IsPwa';

const page = () => {
    const isPWA = useIsPWA();
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()
    const router = useRouter()


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
                        <div className='glass h-[calc(100vh-290px)] rounded-md'>

                            <h1 className='text-white font-semibold p-4 text-center'>Method payment</h1>

                            <div className='p-4'>
                                <p className='w-full text-white'>
                                    Payment is made by sending the amount to the following account and sending proof of payment via WhatsApp. Please follow the terms and conditions.
                                </p>

                                <table className='text-white mt-10 '>
                                    <tr>
                                        <td>Name Back</td>
                                        <td className='p-2'>:</td>
                                        <td>Cih Back</td>
                                    </tr>
                                    <tr>
                                        <td>Account number</td>
                                        <td className='p-2'>:</td>
                                        <td>83236239742302939</td>
                                    </tr>
                                    <tr>
                                        <td>Reason for payment</td>
                                        <td className='p-2'>:</td>
                                        <td>Employee username</td>
                                    </tr>
                                    <tr>
                                        <td>Proof of payment</td>
                                        <td className='p-2'>:</td>
                                        <td>0600299931</td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>

                <MenuFooter />
            </div>
    )
}

export default page
