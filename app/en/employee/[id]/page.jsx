'use client'
import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'
import useIsPWA from '../../_components/IsPwa';
import MenuFooter from '../../_components/menuFooter';
import Loading from '@/app/loading';

import Link from 'next/link';
import { BiSolidEdit } from "react-icons/bi";
import { useUser } from '@/app/_context/userContext';
import { useRouter } from 'next/navigation';

const page = () => {
    const isPWA = useIsPWA();

    const { loading, veriryTokenGetUser, user, employees } = useUser()

    const [employee, setEmployee] = useState({
        fullname: "",
        username: "",
        password: "",
        gender: "fimale",
        commission: 10
    })

    const router = useRouter()


    useEffect(() => { veriryTokenGetUser() }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployee(prev => ({ ...prev, [name]: value }))
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
                <div className='px-4 pb-4  select-none'>
                    <h1 className='text-[1.3rem] text-white font-semibold'>Welcome {user.fullname} </h1>
                </div>


                <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-290px)]"} px-4 pb-4  overflow-y-scroll `}>

                    <div className='w-full  glass2  rounded-xl flex flex-col items-center p-4 pt-8 '>
                        <div className=''>
                            <img src={`/icons/${"hi" == "male" ? "icon2.png" : "iconGirl.png"}`} alt="" className='w-[6rem]' />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[1.5rem] font-semibold text-white'>Btissam</h1>
                            <p className='text-gray-300'>kairmsj0323</p>
                        </div>

                        <div className='pt-4'>
                            <button className='w-full h-[2.5rem]  px-[2rem] text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Add Order</button>
                        </div>

                    </div>

                    <div className='w-full text-[0.8rem] glass rounded-xl items-center p-4 mt-4 '>
                        <table>
                            <tbody className='text-white'>
                                <tr>
                                    <td>Id Order</td>
                                    <td className='px-4'>:</td>
                                    <td>karim8239_2026_03_01_10000</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td className='px-4'>:</td>
                                    <td>Pay</td>
                                </tr>
                                <tr>
                                    <td>Commission</td>
                                    <td className='px-4'>:</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Activei</td>
                                    <td className='px-4'>:</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='flex flex-col gap-4 mt-4'>
                        <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='Password' onChange={({ target }) => { setEmployee({ ...employee, [target.name]: target.value }) }} value={employee.password} name="password" />
                        <input type="number" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='Commission per delivery' onChange={({ target }) => { setEmployee({ ...employee, [target.name]: target.value >= 0 && target.value }) }} value={employee.commission >= 0 ? employee.commission : 10} name="commission" />

                        <div className='flex justify-center gap-11 '>


                            <div className='flex gap-2'>
                                <p className='font-semibold text-white'>male</p>
                                <input type="radio" name='gender' value="male" onChange={handleChange} />
                            </div>

                            <div className='flex gap-2'>
                                <p className='font-semibold text-white'>Fimale</p>
                                <input type="radio" name='gender' value="fimale" onChange={handleChange} />
                            </div>

                        </div>
                    </div>


                    <div className='pt-4 '>
                        <button className='w-full h-[2.5rem]  text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Edite employee</button>
                    </div>



                </div>






                <MenuFooter />


            </div>
    )
}

export default page
