import React from 'react'
import { FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import useIsPWA from './IsPwa';
import Link from 'next/link';

const MenuFooter = () => {


  return (
    <div className={`containerFooter  w-full fixed select-none bottom-[0px] flex text-[1.4rem] text-gray-300 `}>
      <Link href={"/en/dashboard"} className='w-full'>
        <div className='p-2 w-full border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <ImHome3 />
          <p className='text-[.8rem]'>dashboard</p>
        </div>
      </Link>

      <Link href={"/en/orders"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <FaClipboardList />
          <p className='text-[.8rem]'>orders</p>
        </div>
      </Link>


      <Link href={"/en/employee"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <FaUser />
          <p className='text-[.8rem]'>Employee</p>
        </div>
      </Link>


      <Link href={"/en/setting"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26]  flex flex-col  justify-center items-center '>
          <IoMdSettings />
          <p className='text-[.8rem]'>Setting</p>
        </div>
      </Link>
    </div>
  )
}

export default MenuFooter









