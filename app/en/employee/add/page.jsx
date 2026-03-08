'use client'
import React, { useEffect, useState } from 'react'
import { IoIosNotifications } from 'react-icons/io'

import Loading from '@/app/loading';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import useIsPWA from '../../_components/IsPwa';
import MenuFooter from '../../_components/menuFooter';
import { useUser } from '@/app/_context/userContext';


const page = () => {
    const isPWA = useIsPWA();

    const [employee, setEmployee] = useState({
        fullname: "",
        username: "",
        password: "",
        gender: "fimale",
        commission: 10
    })


    const { loading, veriryTokenGetUser, user, getEmployees } = useUser()



    useEffect(() => {
        veriryTokenGetUser()

    }, [])


    const veriryTokenGetUse = async () => {

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


    const addEmployee = async () => {
        try {

            // console.log(employee)

            const today = new Date()

            console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)


            const res = await axios.get(`/api/ozonapi/${user._id}`)

            const createNewEmployee = await axios.post("/api/employee", { ...employee, ...res.data, user: user._id })

            setEmployee(
                {
                    fullname: "",
                    username: "",
                    password: "",
                    gender: "fimale",
                    commission: 10

                }
            )

            console.log(createNewEmployee.data)
            getEmployees()



        } catch (error) {
            console.log(error.message)
        }
    }

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
                <div className='px-4 pb-4 select-none'>
                    <h1 className='text-[1.3rem] text-white font-semibold'>Welcome {user?.fullname} </h1>
                </div>

                <div className={` ${isPWA ? "max-h-[calc(100vh-270px)]" : "max-h-[calc(100vh-290px)]"}  overflow-y-scroll `}>

                    <div className="mx-4 rounded-lg h-[35rem] ">

                        <h1 className='text-center text-white font-semibold py-4'>Add Employee</h1>

                        <div className='flex flex-col gap-4'>
                            <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='Full Name' onChange={({ target }) => { setEmployee({ ...employee, [target.name]: target.value }) }} value={employee.fullname} name="fullname" />
                            <input type="text" className='glass w-full rounded-md h-[2.5rem] pl-4 outline-none text-white' placeholder='User Name' onChange={({ target }) => { setEmployee({ ...employee, [target.name]: target.value }) }} value={employee.username} name="username" />
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


                        <div className='pt-4'>
                            <button onClick={addEmployee} className='w-full h-[2.5rem]  text-white bg-orange-500 rounded-lg hover:bg-[#ffffff14] backdrop-filter-[blur(20px)] hover:border-[1px] hover:border-[#ffffff26] '>Create</button>
                        </div>

                    </div>
                </div>

                <MenuFooter />

            </div>
    )
}

export default page
