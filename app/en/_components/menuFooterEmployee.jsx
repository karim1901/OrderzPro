import React from 'react'
import { FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Link from 'next/link';

import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdAssignmentAdd } from "react-icons/md";

const MenuFooterEmployee = () => {


  return (
    <div className={`containerFooter backdrop-blur-xl w-full fixed select-none bottom-[0px] flex text-[1.4rem] text-gray-300 `}>
      <Link href={"/en/emp/dashboard"} className='w-full'>
        <div className='p-2 w-full border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <ImHome3 className='text-[1.4rem]' />
          <p className='text-[.8rem]'>dashboard</p>
        </div>
      </Link>

      <Link href={"/en/emp/orders"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <FaClipboardList className='text-[1.4rem]' />
          <p className='text-[.8rem]'>orders</p>
        </div>
      </Link>


      <Link href={"/en/emp/addorder"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
          <MdAssignmentAdd className='text-[1.5rem]' />
          <p className='text-[.8rem]'>add order</p>
        </div>
      </Link>


      <Link href={"/en/emp/setting"} className='w-full'>
        <div className='p-2 w-full  border-r-[1px] border-[#ffffff26]  flex flex-col  justify-center items-center '>
          <RiLogoutBoxRLine className='text-[1.4rem]' />
          <p className='text-[.8rem]'>Log out</p>
        </div>
      </Link>
    </div>
  )
}

export default MenuFooterEmployee