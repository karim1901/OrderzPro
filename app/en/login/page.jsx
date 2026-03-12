'use client'
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {

    const [infoUser, setInfoUser] = useState({
        username: "",
        password: ""
    })


    const router = useRouter()


    const login = async () => {
        try {

            const res = await axios.post("/api/login", infoUser)

            // console.log(res.data)

            if(res.data.user.role == "seller" ){
                if(!res.data.user.isVerified){
                    toast.success("you neet verify your email !")
                    return
                }
            }





            localStorage.setItem("user", JSON.stringify(res.data.user));


            toast.success("log in successfully")


            if(res.data.user.role == "seller"){
                router.push("/en/dashboard");
            }if(res.data.user.role == "employee"){
                router.push("/en/emp/dashboard");
            }


        } catch (error) {
            toast.error("error login field .")

            console.log("error in login", error.message)
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

            if(res.data.user.role == "seller"){
                router.push("dashboard")
            }


            if(res.data.user.role == "employee"){

                router.push("/en/emp/dashboard")
            }

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
        <div className='bgHomeMobile px-4  '>

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






            <div className='flex justify-center mt-[5rem]'>
                <div className='p-4 glass w-full rounded-lg shadowSingup  '>
                    <h1 className='text-center text-white font-semibold text-[1.5rem]'>Log in</h1>
                    <div className='flex flex-col gap-3 mt-4'>
                        <input type="text" placeholder='User Name' name='userName' onChange={({ target }) => { setInfoUser({ ...infoUser, username: target.value }) }} value={infoUser.username} className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
                        <input type="text" placeholder='Password' name='password' onChange={({ target }) => { setInfoUser({ ...infoUser, password: target.value }) }} value={infoUser.password} className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
                        <button className='bg-orange-500 text-white h-[2.5rem] rounded-md  hover:bg-[#ffffff14] hover:border-[1px] hover:border-[#ffffff26] ' onClick={login}>Sign In</button>
                    </div>
                    <Link href={"signup"}><p className='text-[#ffffffc5] font-semibold underline text-center mt-4'>Create Acounte</p></Link>
                </div>
            </div>



        </div>
    )
}

export default page
