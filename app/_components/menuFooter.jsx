import React from 'react'
import { FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const MenuFooter = () => {
  return (
    <div className='containerFooter  w-full absolute  bottom-[0px] flex text-[2.5rem] text-gray-300 '>
        <div className='p-4 w-full border-r-[1px] border-[#ffffff26] flex justify-center items-center'><ImHome3/></div>
        <div className='p-4 w-full  border-r-[1px] border-[#ffffff26] flex justify-center items-center '><FaClipboardList/></div>
        <div className='p-4 w-full  border-r-[1px] border-[#ffffff26] flex justify-center items-center '><FaUser/></div>
        <div className='p-4 w-full  border-r-[1px] border-[#ffffff26]  flex justify-center items-center '><IoMdSettings/></div>

    </div>
  )
}

export default MenuFooter









