import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bgSignup px-[3rem]  '>
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
                <div className='p-4 bg-[#ffffff62] max-w-fit rounded-lg shadowSingup  '>
                    <h1 className='text-center font-semibold text-[1.5rem]'>Log in</h1>
                    <div className='flex flex-col gap-3 mt-4'>
                        <input type="text" placeholder='User Name' name='userName' className='w-[20rem] shadowInputs h-[2.5rem] pl-4 rounded-md bg-[#ffffffc3] outline-none border-[2px] border-[#6868685f]' />
                        <input type="text" placeholder='Password' name='password'  className='w-[20rem] shadowInputs h-[2.5rem] pl-4 rounded-md bg-[#ffffffc3]  outline-none border-[2px] border-[#6868685f]' />
                        <button className='bg-orange-500 text-white h-[2.5rem] rounded-md '>Sign In</button>
                    </div>
                    <Link href={"/signup"}><p className='text-[#12185dc5] font-semibold underline text-center mt-4'>Create Acounte</p></Link>
                </div>
            </div>



        </div>
    )
}

export default page
