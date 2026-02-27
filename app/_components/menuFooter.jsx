import React from 'react'
import { FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const MenuFooter = () => {
  return (
    <div className='containerFooter  w-full absolute  bottom-[0px] flex text-[1.5rem] text-gray-300 '>
      <div className='p-4 w-full border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <ImHome3 />
        <p className='text-[1rem]'>Home</p>
      </div>
      <div className='p-4 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <FaClipboardList />
        <p className='text-[1rem]'>orders</p>
      </div>
      <div className='p-4 w-full  border-r-[1px] border-[#ffffff26] flex flex-col  justify-center items-center '>
        <FaUser />
        <p className='text-[1rem]'>Employee</p>
      </div>
      <div className='p-4 w-full  border-r-[1px] border-[#ffffff26]  flex flex-col  justify-center items-center '>
        <IoMdSettings />
        <p className='text-[1rem]'>Setting</p>
      </div>

    </div>
  )
}

export default MenuFooter









