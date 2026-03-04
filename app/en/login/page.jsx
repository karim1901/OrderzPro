import Link from 'next/link'
import React from 'react'

const page = () => {
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
                        <input type="text" placeholder='User Name' name='userName' className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
                        <input type="text" placeholder='Password' name='password'  className='w-full shadowInputs h-[2.5rem] pl-4 rounded-md  glass text-white outline-none' />
                        <button className='bg-orange-500 text-white h-[2.5rem] rounded-md  hover:bg-[#ffffff14] hover:border-[1px] hover:border-[#ffffff26] '>Sign In</button>
                    </div>
                    <Link href={"signup"}><p className='text-[#ffffffc5] font-semibold underline text-center mt-4'>Create Acounte</p></Link>
                </div>
            </div>



        </div>
    )
}

export default page
