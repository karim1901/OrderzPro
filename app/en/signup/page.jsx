'use client'
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {

    const [user, setUser] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })

    const router = useRouter()





    const signup = async () => {

        if (user.password != user.confirmpassword) {
            return
        }

        try {


            const res = await axios.post("/api/user", user)

            toast.success("A verification message has been sent to your email.")

            setUser({
                fullname: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
            })

        } catch (error) {
            toast.error("error created field .")

            console.log("error in signup", error.message)
        }


    }


    const [loading, setLoading] = useState(false)
    const pathname = usePathname()



    useEffect(() => { veriryTokenGetUser() }, [])


    const veriryTokenGetUser = async () => {

        const path = pathname.split("/")[2]


        try {

            const res = await axios.get("/api/me")

            console.log("data user", res.data)
            localStorage.setItem("user", JSON.stringify(res.data.user));
            router.push("dashboard")

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
        <div className='bgHomeMobile px-4   '>
            <div className=" items-center w-full pt-2 justify-between hidden sm:flex">
                <div className="">
                    <img src="/logo/logo.png" className="w-[15rem] " alt="" />
                </div>
            </div>

            <div className="flex w-full  justify-center  sm:hidden">
                <div className="p-4">
                    <img src="/logo/logo.png" className="w-[13rem] " alt="" />
                </div>
            </div>



            <div className='flex justify-center mt-[5rem] '>
                <div className='p-4 w-full  glass  rounded-lg shadowSingup  '>
                    <h1 className='text-center text-white font-semibold text-[1.5rem]'>Create Acounte</h1>
                    <div className='flex flex-col gap-3 mt-4'>
                        <input type="text" name="fullname" value={user.fullname} onChange={({ target }) => { setUser({ ...user, [target.name]: target.value }) }} placeholder='Full Name' className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
                        <input type="text" name="username" value={user.username} onChange={({ target }) => { setUser({ ...user, [target.name]: target.value }) }} placeholder='User Name' className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md glass text-white outline-none ' />
                        <input type="text" name="email" value={user.email} onChange={({ target }) => { setUser({ ...user, [target.name]: target.value }) }} placeholder='Email' className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md glass text-white outline-none ' />
                        <input type="text" name="password" value={user.password} onChange={({ target }) => { setUser({ ...user, [target.name]: target.value }) }} placeholder='Password' className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md glass text-white outline-none ' />
                        <input type="text" name="confirmpassword" value={user.confirmpassword} onChange={({ target }) => { setUser({ ...user, [target.name]: target.value }) }} placeholder='Confirm Password' className='w-full h-[2.5rem] pl-4 rounded-md glass text-white outline-none ' />
                        <button className='bg-orange-500 text-white h-[2.5rem] rounded-md hover:bg-[#ffffff14] hover:border-[1px] hover:border-[#ffffff26] ' onClick={signup}>Create Now</button>
                    </div>
                    <Link href={"login"}><p className='text-[#ffffffc5] font-semibold underline text-center mt-4'>Log In</p></Link>

                </div>
            </div>



        </div>
    )
}

export default page
